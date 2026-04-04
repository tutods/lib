#!/bin/bash
set -e

echo "🏷️  Setting up GitHub labels for tutods/lib"
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to create a label
create_label() {
  local name="$1"
  local color="$2"
  local description="$3"

  echo -n "Creating label '$name'... "

  if gh label create "$name" --color "$color" --description "$description" 2>/dev/null; then
    echo -e "${GREEN}✓ Created${NC}"
  else
    # Check if label already exists
    if gh label list --search "$name" --limit 1 | grep -q "$name"; then
      echo -e "${YELLOW}⚠ Already exists${NC}"
      # Update existing label
      gh label edit "$name" --color "$color" --description "$description" 2>/dev/null || true
    else
      echo -e "${RED}✗ Failed${NC}"
    fi
  fi
}

# Function to delete a label
delete_label() {
  local name="$1"

  echo -n "Deleting label '$name'... "

  if gh label delete "$name" --yes 2>/dev/null; then
    echo -e "${GREEN}✓ Deleted${NC}"
  else
    echo -e "${YELLOW}⚠ Not found or cannot delete${NC}"
  fi
}

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📦 Creating required labels"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Dependency labels
create_label "dependencies" "0366d6" "General dependency updates"
create_label "renovate" "0e8a16" "Created by Renovate bot"
create_label "dev-dependencies" "5319e7" "Development dependency updates"

# Update type labels
create_label "major-update" "d73a4a" "Major version updates requiring manual review"
create_label "minor-patch-update" "a2eeef" "Minor and patch updates"
create_label "security" "b60205" "Security vulnerability fixes"
create_label "pin-digest" "fbca04" "Docker digest pinning updates"
create_label "digest-update" "7057ff" "Digest updates"

# Priority labels
create_label "priority-high" "b60205" "High priority updates"
create_label "priority-medium" "fbca04" "Medium priority updates"
create_label "priority-low" "e4e669" "Low priority updates"

# Technology-specific labels
create_label "github-actions" "2088ff" "GitHub Actions workflow updates"
create_label "docker" "384d54" "Docker image updates"
create_label "typescript" "3178c6" "TypeScript and @types/* updates"
create_label "biome" "60a5fa" "Biome linter/formatter updates"
create_label "testing" "f1e05a" "Testing framework updates"
create_label "build-tools" "0052cc" "Build tool and bundler updates"

# Workflow labels
create_label "release" "2cbe4e" "Release PRs created by NX release"
create_label "automated" "0066cc" "Automatically created PRs"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🗑️  Removing unused labels (if any)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# List of labels to remove (old/unused ones)
labels_to_remove=(
  "enhancement"
  "bug"
  "documentation"
  "duplicate"
  "invalid"
  "wontfix"
  "help wanted"
  "good first issue"
  "question"
)

for label in "${labels_to_remove[@]}"; do
  delete_label "$label"
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 Label setup complete!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "View all labels at: https://github.com/tutods/lib/labels"
echo ""
