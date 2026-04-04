# GitHub Labels

This document lists all the labels that should be configured in this repository. These labels are used by Renovate, workflows, and for issue/PR organization.

## 🏷️ Required Labels

### Dependency Labels

- **`dependencies`** - General dependency updates
- **`renovate`** - Created by Renovate bot
- **`dev-dependencies`** - Development dependency updates

### Update Type Labels

- **`major-update`** - Major version updates requiring manual review
- **`minor-patch-update`** - Minor and patch updates
- **`security`** - Security vulnerability fixes
- **`pin-digest`** - Docker digest pinning updates
- **`digest-update`** - Digest updates

### Priority Labels

- **`priority-high`** - High priority updates (security, major updates)
- **`priority-medium`** - Medium priority updates
- **`priority-low`** - Low priority updates (minor/patch, non-critical)

### Technology-Specific Labels

- **`github-actions`** - GitHub Actions workflow updates
- **`docker`** - Docker image updates
- **`typescript`** - TypeScript and @types/* updates
- **`biome`** - Biome linter/formatter updates
- **`testing`** - Testing framework updates (Jest, Vitest, Testing Library)
- **`build-tools`** - Build tool and bundler updates (Vite, Webpack, esbuild, etc.)

### Workflow Labels

- **`release`** - Release PRs created by NX release workflow
- **`automated`** - Automatically created PRs

## 🎨 Label Colors (Recommended)

| Label | Color | Description |
|-------|-------|-------------|
| `dependencies` | `#0366d6` | Blue |
| `renovate` | `#0e8a16` | Green |
| `dev-dependencies` | `##5319e7` | Purple |
| `major-update` | `##d73a4a` | Red |
| `minor-patch-update` | `##a2eeef` | Light blue |
| `security` | `##b60205` | Dark red |
| `pin-digest` | `##fbca04` | Yellow |
| `digest-update` | `###7057ff` | Purple |
| `priority-high` | `##b60205` | Dark red |
| `priority-medium` | `##fbca04` | Yellow |
| `priority-low` | `##e4e669` | Light green |
| `github-actions` | `##2088ff` | Blue |
| `docker` | `##384d54` | Dark gray |
| `typescript` | `##3178c6` | TypeScript blue |
| `biome` | `##60a5fa` | Biome blue |
| `testing` | `###f1e05a` | JavaScript yellow |
| `build-tools` | `###0052cc` | Dark blue |
| `release` | `##2cbe4e` | Green |
| `automated` | `###0066cc` | Blue |

## 📝 Creating Labels in GitHub

### Option 1: Using GitHub UI

1. Go to: https://github.com/tutods/lib/labels
2. Click **"New label"**
3. Enter name and description
4. Choose color
5. Click **"Create label"**

### Option 2: Using GitHub CLI

```bash
# Dependency labels
gh label create dependencies --color "0366d6" --description "General dependency updates"
gh label create renovate --color "0e8a16" --description "Created by Renovate bot"
gh label create dev-dependencies --color "5319e7" --description "Development dependency updates"

# Update type labels
gh label create major-update --color "d73a4a" --description "Major version updates requiring manual review"
gh label create minor-patch-update --color "a2eeef" --description "Minor and patch updates"
gh label create security --color "b60205" --description "Security vulnerability fixes"
gh label create pin-digest --color "fbca04" --description "Docker digest pinning updates"
gh label create digest-update --color "7057ff" --description "Digest updates"

# Priority labels
gh label create priority-high --color "b60205" --description "High priority updates"
gh label create priority-medium --color "fbca04" --description "Medium priority updates"
gh label create priority-low --color "e4e669" --description "Low priority updates"

# Technology-specific labels
gh label create github-actions --color "2088ff" --description "GitHub Actions workflow updates"
gh label create docker --color "384d54" --description "Docker image updates"
gh label create typescript --color "3178c6" --description "TypeScript and @types/* updates"
gh label create biome --color "60a5fa" --description "Biome linter/formatter updates"
gh label create testing --color "f1e05a" --description "Testing framework updates"
gh label create build-tools --color "0052cc" --description "Build tool and bundler updates"

# Workflow labels
gh label create release --color "2cbe4e" --description "Release PRs created by NX release"
gh label create automated --color "0066cc" --description "Automatically created PRs"
```

## 🔧 Renovate Label Configuration

Renovate automatically applies labels based on the rules in `.github/renovate.json`:

- **Major updates** → `dependencies`, `renovate`, `major-update`, `priority-medium`
- **Minor/patch updates** → `dependencies`, `renovate`, `minor-patch-update`, `priority-low`
- **Security updates** → `dependencies`, `renovate`, `security`, `priority-high`
- **Dev dependencies** → `renovate`, `dev-dependencies`, `priority-low`
- **GitHub Actions** → `dependencies`, `renovate`, `github-actions`, `priority-medium`
- **TypeScript packages** → `dependencies`, `renovate`, `typescript`, `priority-medium`
- **Biome packages** → `dependencies`, `renovate`, `biome`, `priority-medium`
- **Testing packages** → `dependencies`, `renovate`, `testing`, `priority-medium`
- **Build tools** → `dependencies`, `renovate`, `build-tools`, `priority-medium`

## 📚 Related Documentation

- [Renovate Configuration](../.github/renovate.json)
- [Contributing Guide](../CONTRIBUTING.md)
- [Release Process](./RELEASE.md)

---

*Last updated: 2025-04-04*
