# Repository Setup Scripts

This directory contains scripts to help set up and maintain the repository.

## 🏷️ Label Setup Script

### `setup-labels.sh`

Automatically creates all required GitHub labels with appropriate colors and descriptions, and removes unused labels.

#### Usage

**Option 1: Run locally (requires GitHub CLI)**

```bash
# Make sure you have gh CLI installed and authenticated
gh auth login

# Run the script
.github/scripts/setup-labels.sh
```

**Option 2: Run via GitHub Actions**

Push to main and the script will automatically run (workflow not yet implemented).

#### What it does

✅ **Creates these labels:**

**Dependency Labels:**
- `dependencies` (Blue) - General dependency updates
- `renovate` (Green) - Created by Renovate bot
- `dev-dependencies` (Purple) - Development dependency updates

**Update Type Labels:**
- `major-update` (Red) - Major version updates requiring manual review
- `minor-patch-update` (Light blue) - Minor and patch updates
- `security` (Dark red) - Security vulnerability fixes
- `pin-digest` (Yellow) - Docker digest pinning updates
- `digest-update` (Purple) - Digest updates

**Priority Labels:**
- `priority-high` (Dark red) - High priority updates
- `priority-medium` (Yellow) - Medium priority updates
- `priority-low` (Light green) - Low priority updates

**Technology-Specific Labels:**
- `github-actions` (Blue) - GitHub Actions workflow updates
- `docker` (Dark gray) - Docker image updates
- `typescript` (TypeScript blue) - TypeScript and @types/* updates
- `biome` (Biome blue) - Biome linter/formatter updates
- `testing` (Yellow) - Testing framework updates
- `build-tools` (Dark blue) - Build tool and bundler updates

**Workflow Labels:**
- `release` (Green) - Release PRs created by NX release
- `automated` (Blue) - Automatically created PRs

🗑️ **Removes these unused labels:**
- `enhancement`
- `bug`
- `documentation`
- `duplicate`
- `invalid`
- `wontfix`
- `help wanted`
- `good first issue`
- `question`

#### Requirements

- **GitHub CLI (`gh`)** - Install from https://cli.github.com/
- **Authenticated** - Run `gh auth login` first
- **Repository access** - Must have write permissions

#### Troubleshooting

**Error: "gh: command not found"**
- Install GitHub CLI: `brew install gh` (macOS) or visit https://cli.github.com/

**Error: "not logged in"**
- Run: `gh auth login`

**Error: "could not create label"**
- Check you have write permissions to the repository
- Verify you're authenticated: `gh auth status`

---

## Other Scripts

More scripts will be added here as needed for repository maintenance.

*Last updated: 2025-04-04*
