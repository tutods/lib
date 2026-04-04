#!/bin/bash
set -e

# Migrate git tags and GitHub releases from release/{name}/{version} to {name}@{version}

echo "🔄 Starting tag migration..."

# Get all package.json files
for pkg_json in packages/*/package.json configs/*/package.json; do
  [ -f "$pkg_json" ] || continue

  private=$(jq -r '.private // false' "$pkg_json")
  [ "$private" = "false" ] || continue

  name=$(jq -r '.name' "$pkg_json")
  version=$(jq -r '.version' "$pkg_json")

  old_tag="release/${name}/${version}"
  new_tag="${name}@${version}"

  echo ""
  echo "📦 Processing ${name}@${version}"
  echo "   Old tag: $old_tag"
  echo "   New tag: $new_tag"

  # Check if old tag exists
  if git rev-parse "$old_tag" >/dev/null 2>&1; then
    echo "   ✅ Found old tag"

    # Get the commit hash from the old tag
    commit=$(git rev-list -n 1 "$old_tag" 2>/dev/null || echo "")
    if [ -n "$commit" ]; then
      echo "   📍 Points to commit: ${commit}"

      # Delete old GitHub release if it exists
      if gh release view "$old_tag" --repo "${GITHUB_REPOSITORY}" >/dev/null 2>&1; then
        echo "   🗑️  Deleting old GitHub release: $old_tag"
        gh release delete "$old_tag" --repo "${GITHUB_REPOSITORY}" --yes
      fi

      # Delete the old tag locally and remotely
      echo "   🗑️  Deleting old tag: $old_tag"
      git tag -d "$old_tag" 2>/dev/null || true
      git push origin ":refs/tags/${old_tag}" 2>/dev/null || true

      # Create new tag at the same commit
      echo "   ✨ Creating new tag: $new_tag at ${commit}"
      git tag -a "$new_tag" -m "${new_tag}" "${commit}" 2>/dev/null || true

      # Push new tag
      echo "   📤 Pushing new tag"
      git push origin "$new_tag" 2>/dev/null || true

      # Create new GitHub release
      pkg_dir=$(dirname "$pkg_json")
      changelog_file="${pkg_dir}/CHANGELOG.md"
      notes=""
      if [ -f "$changelog_file" ]; then
        notes=$(awk -v ver="${version}" \
          'substr($0, 1, length("## " ver)) == ("## " ver) { flag=1; next }
           /^## / { if (flag) exit }
           flag { print }' \
          "$changelog_file")
      fi

      printf '%s\n' "${notes:-"No changelog available."}" > /tmp/release-notes.txt

      if ! gh release view "$new_tag" --repo "${GITHUB_REPOSITORY}" >/dev/null 2>&1; then
        echo "   🎉 Creating GitHub release: $new_tag"
        gh release create "$new_tag" \
          --repo "${GITHUB_REPOSITORY}" \
          --title "$new_tag" \
          --notes-file /tmp/release-notes.txt
      else
        echo "   ⚠️  GitHub release already exists: $new_tag"
      fi

      echo "   ✅ Migrated ${name}@${version}"
    else
      echo "   ⚠️  Could not get commit for old tag"
    fi
  else
    echo "   ℹ️  Old tag does not exist, checking if new tag exists..."

    # Create new tag if it doesn't exist
    if ! git rev-parse "$new_tag" >/dev/null 2>&1; then
      echo "   ✨ Creating new tag: $new_tag"
      git tag -a "$new_tag" -m "${new_tag}"
      git push origin "$new_tag"
    else
      echo "   ℹ️  New tag already exists"
    fi
  fi
done

echo ""
echo "✨ Tag migration complete!"
echo ""
echo "📋 Summary:"
echo "   - Converted tags from release/{name}/{version} to {name}@{version}"
echo "   - Updated GitHub releases accordingly"
echo "   - Old tags have been deleted from both local and remote"
