<!-- omit from toc -->
# ![Renovate Config](https://img.shields.io/badge/Renovate-%40tutods%2Frenovate--config-1A1F6C?logo=renovate&logoSize=auto&style=for-the-badge)

![npm version](https://img.shields.io/npm/v/@tutods/renovate-config?style=for-the-badge) ![npm downloads](https://img.shields.io/npm/dm/@tutods/renovate-config?style=for-the-badge) ![License](https://img.shields.io/npm/l/@tutods/renovate-config?style=for-the-badge)

---

## Table of Contents
- [Table of Contents](#table-of-contents)
- [📄 Goal](#-goal)
  - [💡 What you get](#-what-you-get)
- [✨ Features](#-features)
- [❓ How to install and use it](#-how-to-install-and-use-it)
  - [Installation](#installation)
  - [Local repos (unpublished / same monorepo)](#local-repos-unpublished--same-monorepo)
  - [Adding project-specific rules](#adding-project-specific-rules)
  - [Overriding inherited settings](#overriding-inherited-settings)
- [⚙️ What's included](#️-whats-included)
  - [Core settings](#core-settings)
  - [Package rules](#package-rules)
- [📋 Compatibility](#-compatibility)

## 📄 Goal

This is a **shared Renovate preset** — a single source of truth for dependency update automation across all `@tutods` projects. Extend it once per repo and get consistent automerge policies, security scanning, digest pinning, and labeling without duplicating config.

### 💡 What you get

| Area | Behavior |
|------|----------|
| **Minor & patch** | Auto-merged via PR |
| **Major** | Requires dashboard approval |
| **Security advisories** | Instantly processed, auto-merged (minor/patch), grouped with `fix(deps):` prefix |
| **GitHub Actions** | Digest-pinned, minor/patch auto-merged |
| **Docker images** | Digest-pinned, minor/patch auto-merged |
| **devDependencies** | Grouped by minor/patch and major |
| **TypeScript, Biome, Testing, Build tools** | Dedicated groups with appropriate commit prefixes |
| **pnpm** | Runs `pnpm dedupe` post-update |
| **Lockfile** | Monthly maintenance PR |

## ✨ Features

- 🔐 **Supply-chain hardening** — digest pinning for Docker images and GitHub Actions, OSV vulnerability scanning
- 🤖 **Smart automerge** — minor/patch bumps auto-merge; major bumps require explicit dashboard approval
- 🛡️ **Emergency brake** — label any dependency `renovate:stop` to freeze its updates
- 📦 **Ecosystem-aware** — separate groups for TypeScript, Biome, testing, build tools, devDependencies
- 🔄 **Rollback PRs** — creates PRs when a version is pulled from the registry
- ⏳ **Minimum release age** — waits 3 days before picking up a newly-published version (avoids broken releases)
- 🧹 **Dashboard autoclose** — auto-closes the dashboard issue when no open updates remain
- 🧩 **Config migration** — Renovate self-updates its own config when breaking changes happen
- 📝 **Release notes** — embeds release notes in the PR description
- 📦 **pnpm-native** — dedupes the lockfile automatically after every bump

## ❓ How to install and use it

### Installation

![PNPM](https://img.shields.io/badge/PNPM-000?logo=pnpm&logoSize=auto&style=for-the-badge)
```bash
pnpm add -D @tutods/renovate-config
```

![Yarn](https://img.shields.io/badge/yarn-000?logo=yarn&logoSize=auto&style=for-the-badge)
```bash
yarn add -D @tutods/renovate-config
```

![npm](https://img.shields.io/badge/npm-000?logo=npm&logoSize=auto&style=for-the-badge)
```bash
npm install -D @tutods/renovate-config
```

Then create (or update) your `.github/renovate.json`:

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["@tutods/renovate-config"]
}
```

That's it. You get all the rules, automerge policies, and security scanning listed above.

### Local repos (unpublished / same monorepo)

If the package hasn't been published to npm yet (or you're inside the same monorepo), use the local preset syntax:

```json
{
  "extends": ["local>tutods/lib//configs/renovate-config"]
}
```

This tells Renovate to fetch the preset from the GitHub repo directly, bypassing npm.

### Adding project-specific rules

Add them alongside the preset — they merge on top:

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["@tutods/renovate-config"],
  "timezone": "America/New_York",
  "packageRules": [
    {
      "description": "Group TanStack packages",
      "matchPackageNames": ["@tanstack/{/,}**"],
      "groupName": "TanStack",
      "groupSlug": "tanstack"
    }
  ]
}
```

### Overriding inherited settings

Any key you set in your local `renovate.json` overrides the inherited value. For example, to change the schedule:

```json
{
  "extends": ["@tutods/renovate-config"],
  "schedule": ["before 6am on Monday"]
}
```

## ⚙️ What's included

### Core settings

| Setting | Value | Why |
|---------|-------|-----|
| `schedule` | `before 3am every weekday` | Runs outside working hours |
| `timezone` | `Europe/Lisbon` | Consistent timezone reference |
| `prHourlyLimit` | `2` | Prevents PR floods |
| `prConcurrentLimit` | `10` | Keeps the PR list manageable |
| `branchConcurrentLimit` | `5` | Limits parallel branch noise |
| `minimumReleaseAge` | `3 days` | Avoids broken releases |
| `rebaseWhen` | `conflicted` | Only force-push when needed |
| `rangeStrategy` | `bump` | Bumps ranges to the new version |
| `separateMinorPatch` | `true` | Separate PRs for minor and patch |
| `separateMultipleMajor` | `true` | Separate PRs per major dependency |
| `dependencyDashboardApproval` | `true` | Major updates require explicit approval |
| `dependencyDashboardAutoclose` | `true` | Auto-closes dashboard when clean |
| `stopUpdatingLabel` | `renovate:stop` | Emergency brake for vulnerable deps |
| `osvVulnerabilityAlerts` | `true` | OSV/GHSA vulnerability scanning |
| `fetchReleaseNotes` | `true` | Embeds release notes in PR body |
| `rollbackPrs` | `true` | Creates rollback PRs for pulled releases |
| `configMigration` | `true` | Auto-migrates config on breaking Renovate changes |
| `postUpdateOptions` | `["pnpmDedupe"]` | Dedupes pnpm lockfile after updates |
| `lockFileMaintenance` | Monthly, auto-merged | Keeps the lockfile healthy |

### Package rules

| Rule | Scope | Automerge |
|------|-------|-----------|
| Major updates | All ecosystems | No (dashboard approval required) |
| Minor & patch updates | All ecosystems | Yes |
| Security advisories (minor/patch) | All ecosystems | Yes |
| Security advisories (major) | All ecosystems | No |
| devDep security (minor/patch) | devDependencies | Yes |
| devDep security (major) | devDependencies | No |
| devDep minor & patch | devDependencies | Yes (grouped) |
| devDep major | devDependencies | No (grouped) |
| GitHub Actions (minor/patch) | `github-tags` | Yes, digest-pinned |
| GitHub Actions (major) | `github-tags` | No, digest-pinned |
| Pin digest updates | All | Yes |
| Digest updates | All | Yes |
| Docker (minor/patch) | `docker` | Yes, digest-pinned |
| Docker (major) | `docker` | No, digest-pinned |
| TypeScript packages | TS ecosystem | Grouped |
| Biome packages | Biome ecosystem | Grouped |
| Testing packages | Jest, Vitest, Testing Library | Grouped |
| Build tools | Webpack, Vite, Rollup, esbuild | Grouped |
| Node engine | Node.js | Disabled (ignored) |

## 📋 Compatibility

- **Renovate** v38+
- **Node.js** v20+
- Works with npm, yarn, and pnpm projects
- GitHub-hosted repos only (the `local>` preset path relies on GitHub)

---

*Last updated: Renovate v39+ — digest pinning, config migration, rollback PRs*
