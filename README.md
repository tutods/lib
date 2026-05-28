<!-- omit from toc -->
# TutoDS Lib

[![Stargazers][stars-shield]][stars-url] [![Forks][forks-shield]][forks-url] ![License](https://img.shields.io/github/license/tutods/lib?style=for-the-badge)

<!-- omit from toc -->
## 🔄 CI/CD Status

[![Code Check][code-check-badge]](../../actions/workflows/code-check.yaml) [![Commit Lint][commit-lint-badge]](../../actions/workflows/commit-lint.yaml) [![Release PR][release-pr-badge]](../../actions/workflows/release-pr.yaml) [![Release][release-badge]](../../actions/workflows/release.yaml)

> A collection of reusable packages, configurations, and components for web development projects.

---
<!-- omit from toc -->
## Table of Contents
- [📄 Goal](#-goal)
  - [What you will find](#what-you-will-find)
- [📦 Packages](#-packages)
- [🛠 Development](#-development)
  - [Getting Started](#getting-started)
- [🔄 CI/CD](#-cicd)
- [📥 Installation](#-installation)
- [👥 Contributing](#-contributing)
- [🔗 More About Me](#-more-about-me)

## 📄 Goal

This monorepo stores reusable packages used across my projects, including shared configs and React components. These packages keep project setup consistent and reduce repeated boilerplate.

### What you will find

This monorepo currently contains four publishable packages: three shared configuration packages and one React component package.

[![biome][biome]][biome-package] [![typescript][typescript]][typescript-package] [![renovate][renovate-badge]][renovate-package] [![components][components]][react-package]

Each package is designed to be lightweight, well-documented, and easy to integrate into your projects.

## 📦 Packages

To learn more about each package, read the `README.md` file inside each package folder:

- [**Biome Config**](./configs/biome-config/README.md) - Comprehensive configuration for Biome linter and formatter, ensuring consistent code style across projects
- [**TypeScript Config**](./configs/typescript-config/README.md) - TypeScript configurations for different project types with sensible defaults and strict type checking
- [**Renovate Config**](./configs/renovate-config/README.md) - Shared Renovate preset with automerge policies, security scanning, and digest pinning
- [**Components**](./packages/components/README.md) - Small React helper components for conditional rendering and composition
- [**Adding Packages Guide**](./docs/ADDING_PACKAGES.md) — How to add a new publishable package to the monorepo

## 🛠 Development

This monorepo uses:
- **Nx** for managing the monorepo
- **pnpm** as the package manager
- **Biome** for linting and formatting
- **Conventional Commits** for release automation
- **GitHub Actions** for CI/CD automation

### Getting Started

```bash
# Clone the repository
git clone https://github.com/tutods/lib.git
cd lib

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Lint all files
pnpm lint
```

## 🔄 CI/CD

This monorepo uses automated workflows for continuous integration and deployment:

### Workflows

- **Code Check** - Runs Biome linting on every pull request
- **Commit Lint** - Validates commit messages follow conventional commits
- **Release PR** - Automatically creates release PRs when you push to main
- **Release** - Publishes packages to npm when release PR is merged

### Release Process

This project uses **automated releases** powered by NX Release and Conventional Commits:

1. **Push to main** with conventional commits (feat, fix, docs, etc.)
2. **Release PR** is automatically created with version bumps and changelogs
3. **Review and merge** the release PR
4. **Packages are published** to npm automatically
5. **Git tags** are created (`@tutods/package@version`)
6. **GitHub releases** are created with changelogs

For detailed information, see [Release Documentation](./docs/RELEASE.md).

## 📥 Installation

Install the packages you need. Runtime packages go in `dependencies`; config packages usually go in `devDependencies`.

```bash
# React components
pnpm add @tutods/components

# Shared configs
pnpm add -D @tutods/biome-config @tutods/typescript-config
```

The Renovate preset is best consumed directly from the repository with `github>tutods/lib//configs/renovate-config/default`; see the Renovate package README for details.

Check each package's `README` for specific installation and usage instructions.

## 👥 Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes using Conventional Commits (`git commit -m "feat: add amazing feature"`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and follow the existing code style.


## 🔗 More About Me

[![GitHub][github]](https://github.com/tutods) [![linkedin][linkedin]](https://linkedin.com/in/daniel-sousa-tutods) [![twitter][twitter]](https://twitter.com/dsousa_12) [![instagram][instagram]](https://instagram.com/dsousa_12)


<!-- Badges -->
[biome]: https://img.shields.io/badge/biome%20config-000000?style=for-the-badge&logo=biome&logoColor=white
[code-check-badge]: https://img.shields.io/github/actions/workflow/status/tutods/lib/code-check.yaml?branch=main&label=code%20check&logo=github&style=for-the-badge
[commit-lint-badge]: https://img.shields.io/github/actions/workflow/status/tutods/lib/commit-lint.yaml?branch=main&label=commit%20lint&logo=github&style=for-the-badge
[release-pr-badge]: https://img.shields.io/github/actions/workflow/status/tutods/lib/release-pr.yaml?branch=main&label=release%20pr&logo=github&style=for-the-badge
[release-badge]: https://img.shields.io/github/actions/workflow/status/tutods/lib/release.yaml?branch=main&label=release&logo=github&style=for-the-badge
[typescript]: https://img.shields.io/badge/typescript%20config-000000?style=for-the-badge&logo=typescript&logoColor=white
[renovate-badge]: https://img.shields.io/badge/renovate%20config-000000?style=for-the-badge&logo=renovate&logoColor=white
[components]: https://img.shields.io/badge/react%20components-000000?style=for-the-badge&logo=react&logoColor=white
[forks-shield]: https://img.shields.io/github/forks/tutods/lib?style=for-the-badge
[stars-shield]: https://img.shields.io/github/stars/tutods/lib?style=for-the-badge
[instagram]: https://img.shields.io/badge/instagram-000000?style=for-the-badge&logo=instagram&logoColor=white
[twitter]: https://img.shields.io/badge/twitter-000000?style=for-the-badge&logo=x&logoColor=white
[github]: https://img.shields.io/badge/github-000000?style=for-the-badge&logo=github&logoColor=white
[linkedin]: https://img.shields.io/badge/linkedin-000000?style=for-the-badge&logo=linkedin&logoColor=white

<!-- Links -->
[biome-package]: https://www.npmjs.com/package/@tutods/biome-config
[typescript-package]: https://www.npmjs.com/package/@tutods/typescript-config
[renovate-package]: https://www.npmjs.com/package/@tutods/renovate-config
[react-package]: https://www.npmjs.com/package/@tutods/components
[forks-url]: https://github.com/tutods/lib/network/members
[stars-url]: https://github.com/tutods/lib/stargazers
