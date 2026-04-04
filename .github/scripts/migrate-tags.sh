#!/bin/bash
set -e

echo "🔄 Starting comprehensive tag migration..."

# Track statistics
deleted_tags=0
created_tags=0
deleted_releases=0
created_releases=0

# Get ALL old tags in release/{name}/{version} format
old_tags=$(git tag -l "release/*" | sort -V)

if [ -z "$old_tags" ]; then
  echo "ℹ️  No old tags found in release/ format"
  exit 0
fi

echo "📋 Found $(echo "$old_tags" | wc -l) old tags to migrate"
echo ""

# Process each old tag
while IFS= read -r old_tag; do
  [ -z "$old_tag" ] && continue

  # Parse the tag: release/@tutods/biome-config/0.13.3
  # Extract package name and version
  if [[ $old_tag =~ release/@(.+)/(.+) ]]; then
    package_name="@${BASH_REMATCH[1]}"
    version="${BASH_REMATCH[2]}"
    new_tag="${package_name}@${version}"

    echo "📦 Migrating: $old_tag → $new_tag"

    # Get the commit hash from the old tag
    commit=$(git rev-list -n 1 "$old_tag" 2>/dev/null || echo "")
    if [ -z "$commit" ]; then
      echo "   ⚠️  Could not get commit for $old_tag, skipping"
      continue
    fi

    echo "   📍 Commit: ${commit}"

    # Delete old GitHub release if it exists
    if gh release view "$old_tag" --repo "${GITHUB_REPOSITORY}" >/dev/null 2>&1; then
      echo "   🗑️  Deleting old GitHub release: $old_tag"
      gh release delete "$old_tag" --repo "${GITHUB_REPOSITORY}" --yes 2>/dev/null || true
      ((deleted_releases++)) || true
    fi

    # Delete the old tag locally and remotely
    echo "   🗑️  Deleting old tag: $old_tag"
    git tag -d "$old_tag" 2>/dev/null || true
    git push origin ":refs/tags/${old_tag}" 2>/dev/null || true
    ((deleted_tags++)) || true

    # Check if new tag already exists
    if git rev-parse "$new_tag" >/dev/null 2>&1; then
      echo "   ℹ️  New tag already exists: $new_tag"
    else
      # Create new tag at the same commit
      echo "   ✨ Creating new tag: $new_tag at ${commit}"
      git tag -a "$new_tag" -m "${new_tag}" "${commit}"
      ((created_tags++)) || true

      # Push new tag
      echo "   📤 Pushing new tag"
      git push origin "$new_tag"

      # Try to create GitHub release with changelog
      # Find the package directory
      if [[ $package_name == *"biome-config"* ]]; then
        pkg_dir="configs/biome-config"
      elif [[ $package_name == *"typescript-config"* ]]; then
        pkg_dir="configs/typescript-config"
      elif [[ $package_name == *"components"* ]]; then
        pkg_dir="packages/components"
      else
        pkg_dir=""
      fi

      if [ -n "$pkg_dir" ] && [ -f "$pkg_dir/CHANGELOG.md" ]; then
        changelog_file="${pkg_dir}/CHANGELOG.md"

        # Extract changelog for this version
        notes=$(awk -v ver="${version}" \
          'substr($0, 1, length("## " ver)) == ("## " ver) { flag=1; next }
           /^## / { if (flag) exit }
           flag { print }' \
          "$changelog_file")

        printf '%s\n' "${notes:-"No changelog available."}" > /tmp/release-notes.txt

        # Create GitHub release
        echo "   🎉 Creating GitHub release: $new_tag"
        if gh release create "$new_tag" \
          --repo "${GITHUB_REPOSITORY}" \
          --title "$new_tag" \
          --notes-file /tmp/release-notes.txt 2>/dev/null; then
          ((created_releases++)) || true
        else
          echo "   ⚠️  Could not create GitHub release (may already exist)"
        fi
      else
        echo "   ℹ️  No CHANGELOG.md found for $package_name, skipping release creation"
      fi
    fi

    echo "   ✅ Migrated $old_tag"
    echo ""
  fi
done <<< "$old_tags"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ Migration Complete!"
echo ""
echo "📊 Summary:"
echo "   Deleted tags: $deleted_tags"
echo "   Created tags: $created_tags"
echo "   Deleted releases: $deleted_releases"
echo "   Created releases: $created_releases"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
