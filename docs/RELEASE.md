# Release Process

This document explains the automated release process for the TutoDS Lib monorepo.

## 📋 Table of Contents

- [Overview](#overview)
- [How It Works](#how-it-works)
- [Triggering a Release](#triggering-a-release)
- [Release Workflow](#release-workflow)
- [Version Bumping Rules](#version-bumping-rules)
- [Tag Format](#tag-format)
- [Rollback Procedure](#rollback-procedure)
- [FAQ](#faq)

## 🎯 Overview

This monorepo uses **fully automated releases** powered by:

- **NX Release** - Versioning and changelog generation
- **Conventional Commits** - Semantic versioning
- **GitHub Actions** - Automated CI/CD
- **npm Registry** - Package publishing

### Benefits

✅ **No manual versioning** - Commits determine versions
✅ **Automated changelogs** - Generated from commits
✅ **Consistent releases** - Same process every time
✅ **Traceability** - Every version linked to commits
✅ **Safety** - Failed publishes don't leave orphaned tags

## 🔄 How It Works

### High-Level Flow

```
┌─────────────────┐
│ Push to main    │
│ (feat/fix/docs) │
└────────┬────────┘
         │
         ▼
┌─────────────────────────┐
│ release-pr.yaml         │
│ Runs nx release         │
│ Creates release/next PR │
└────────┬────────────────┘
         │
         ▼
┌─────────────────────────┐
│ Review & Merge PR       │
│ (release/next → main)   │
└────────┬────────────────┘
         │
         ▼
┌─────────────────────────┐
│ release.yaml            │
│ Publishes to npm        │
│ Creates git tags        │
│ Creates GitHub releases │
└─────────────────────────┘
```

### Workflows

#### 1. Release PR Workflow (`.github/workflows/release-pr.yaml`)

**Triggers:**
- Push to `main` branch
- Changes in `packages/**` or `configs/**`

**What it does:**
1. Runs `nx release --skip-publish`
2. Analyzes commits since last release
3. Bumps package versions based on commit types
4. Generates `CHANGELOG.md` for each package
5. Commits changes to `release/next` branch
6. Creates/updates PR: `release/next → main`

**When it runs:**
- Automatically on every push to `main`
- Manual dispatch via GitHub Actions UI

#### 2. Release Workflow (`.github/workflows/release.yaml`)

**Triggers:**
- PR merge: `release/next → main`
- Manual dispatch (for retry after failures)

**What it does:**
1. Builds all packages
2. Publishes to npm registry
3. Creates git tags: `@tutods/package@version`
4. Creates GitHub releases with changelogs
5. Sets `latest` dist-tag on npm

**Jobs:**
- `build-and-publish` - Build and publish packages
- `tag` - Create and push git tags (only after successful publish)
- `github-releases` - Create GitHub releases (only after tags)

## 🚀 Triggering a Release

### Automatic Release

Any commit to `main` with a conventional commit type triggers the process:

```bash
# Minor version bump
git commit -m "feat(components): add Button component"

# Patch version bump
git commit -m "fix(components): resolve onClick handler bug"

# Patch version bump
git commit -m "docs: update README with examples"
```

### Manual Dispatch

You can also trigger workflows manually:

#### Trigger Release PR

1. Go to: https://github.com/tutods/lib/actions/workflows/release-pr.yaml
2. Click "Run workflow"
3. Select `main` branch
4. Click "Run workflow"

#### Trigger Release

1. Go to: https://github.com/tutods/lib/actions/workflows/release.yaml
2. Click "Run workflow"
3. Click "Run workflow"

**Note:** Use manual dispatch only for:
- Retrying failed releases
- Emergency releases
- Testing (with caution)

## 📊 Release Workflow

### Step-by-Step Process

#### 1. Make Changes

```bash
# Create a feature branch
git checkout -b feature/new-component

# Make your changes
# ...

# Commit with conventional commit
pnpm commit  # Uses Commitizen CLI

# Push and create PR
git push origin feature/new-component
```

#### 2. Review and Merge

- Create PR from your branch to `main`
- Get reviews and address feedback
- Merge PR to `main`

#### 3. Release PR Created

Within minutes of merging:

- `release-pr.yaml` workflow runs
- A new PR is created: `release/next → main`
- PR contains version bumps and changelogs

#### 4. Review Release PR

The release PR includes:

**Updated files:**
- `packages/*/package.json` - Bumped versions
- `configs/*/package.json` - Bumped versions
- `packages/*/CHANGELOG.md` - Generated changelogs
- `configs/*/CHANGELOG.md` - Generated changelogs

**Review checklist:**
- [ ] Version bumps look correct
- [ ] Changelogs are accurate
- [ ] No unexpected changes

#### 5. Merge Release PR

- Click "Merge pull request"
- Use "Squash and merge" or "Merge commit"
- **Do not use "Rebase and merge"** (can break conventional commit detection)

#### 6. Automatic Publish

After merging the release PR:

- `release.yaml` workflow runs
- Packages are published to npm
- Git tags are created
- GitHub releases are created

**Timeline:**
- Build: ~1-2 minutes
- Publish: ~30 seconds per package
- Total: ~2-3 minutes

## 🔢 Version Bumping Rules

NX Release uses **Conventional Commits** to determine version increments:

| Commit Type | Bump | Example |
|-------------|------|---------|
| `feat` | **Minor** | 0.8.0 → 0.9.0 |
| `fix` | **Patch** | 0.8.0 → 0.8.1 |
| `docs` | **Patch** | 0.8.0 → 0.8.1 |
| `refactor` | **Patch** | 0.8.0 → 0.8.1 |
| `chore` | **Patch** | 0.8.0 → 0.8.1 |
| `ci` | **Patch** | 0.8.0 → 0.8.1 |
| `style` | **Patch** | 0.8.0 → 0.8.1 |
| `perf` | **Minor** | 0.8.0 → 0.9.0 |
| `test` | **None** | Ignored |

### Examples

```bash
# Triggers minor bump: 0.8.0 → 0.9.0
git commit -m "feat(components): add Modal component"

# Triggers patch bump: 0.8.0 → 0.8.1
git commit -m "fix(components): resolve Button onClick bug"

# Triggers patch bump: 0.8.0 → 0.8.1
git commit -m "docs: update README with new examples"

# No version bump
git commit -m "test: add unit tests for Button"
```

### Multiple Commits

NX Release looks at **all commits since the last release** and determines the highest bump needed:

```bash
# Last release: 0.8.0

git commit -m "fix(biome-config): resolve Tailwind sorting"  # patch
git commit -m "feat(components): add Input component"        # minor
git commit -m "docs: update contributing guide"              # patch

# Result: 0.8.0 → 0.9.0 (minor wins)
```

## 🏷️ Tag Format

Git tags follow the format: `{package-name}@{version}`

### Examples

```
@tutods/components@0.8.3
@tutods/biome-config@0.13.5
@tutods/typescript-config@0.7.1
```

### Viewing Tags

```bash
# List all tags
git tag

# Fetch all tags
git fetch --tags --force

# Show tag details
git show @tutods/components@0.8.3
```

### GitHub Releases

Each tag has a corresponding GitHub release:

- **Release title**: `@tutods/components@0.8.3`
- **Release notes**: Changelog entry for that version
- **Assets**: None (packages published to npm)

## 🔄 Rollback Procedure

If a release fails or has issues:

### 1. Failed Publish

If `release.yaml` fails during publish:

- No git tags are pushed (fail-safe design)
- No packages are published to npm
- The `release/next` branch still exists

**Solution:**
1. Check the failure reason in workflow logs
2. Fix the issue
3. Push a commit to `main` or manually re-run the workflow

### 2. Published Bad Version

If a bad version was published:

```bash
# DO NOT unpublish (npm best practice)
# Instead, publish a fix immediately

# Create a fix commit
git commit -m "fix(components): resolve critical bug"

# This will trigger a new patch release
# Example: 0.8.3 → 0.8.4
```

**Why not unpublish?**
- Breaking change for users
- Cannot republish same version
- Against npm best practices

### 3. Accidental Release PR Merge

If the release PR was merged by accident:

- Packages are published (can't undo)
- Tags are created
- GitHub releases exist

**Solution:**
- Evaluate if the release is actually harmful
- If yes, publish a fix immediately (see #2)
- If no, accept the early release

## ❓ FAQ

### Q: Can I publish manually?

**A:** Not recommended. The automated process ensures:
- Consistent versioning
- Generated changelogs
- Proper git tags
- GitHub releases

### Q: How long does a release take?

**A:** Typically 2-3 minutes:
- Build: 1-2 minutes
- Publish: 30 seconds per package
- Tags/releases: 30 seconds

### Q: What if the workflow fails?

**A:** Check the logs:
- **Build failure**: Fix build errors and push new commit
- **Publish failure**: Check npm token and permissions, then re-run manually
- **Tag failure**: Rare, but can retry manually

### Q: Can I skip the release PR?

**A:** No, the release PR is required for:
- Reviewing version bumps
- Checking changelogs
- Ensuring quality

### Q: How do I change the version manually?

**A:** You don't. Versions are determined by:
1. Conventional commit types
2. Automated analysis by NX Release
3. No manual intervention needed

### Q: What's the difference between `release-pr.yaml` and `release.yaml`?

**A:**
- **`release-pr.yaml`**: Creates the release PR (version bumps + changelogs)
- **`release.yaml`**: Publishes packages and creates tags/releases

### Q: Can I release a specific package?

**A:** Not directly. The release process:
1. Analyzes all packages
2. Bumps versions for changed packages only
3. Publishes all changed packages

### Q: How do I know what version will be published?

**A:** Check the release PR:
1. Open the `release/next` PR
2. Look at the `package.json` changes
3. The version in the PR will be published

## 📚 Related Documentation

- [CONTRIBUTING.md](../CONTRIBUTING.md) - Contribution guidelines
- [nx.json](../nx.json) - NX release configuration
- [.github/workflows/release-pr.yaml](../.github/workflows/release-pr.yaml) - Release PR workflow
- [.github/workflows/release.yaml](../.github/workflows/release.yaml) - Release workflow

## 📧 Support

If you have questions or issues with the release process:

- **GitHub Issues**: [tutods/lib/issues](https://github.com/tutods/lib/issues)
- **Email**: [daniel.sousa.tutods@gmail.com](mailto:daniel.sousa.tutods@gmail.com)

---

*Happy releasing! 🚀*
