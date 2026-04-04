<!-- omit from toc -->
# TutoDS Lib

[![Stargazers][stars-shield]][stars-url] [![Forks][forks-shield]][forks-url] ![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge) ![License](https://img.shields.io/github/license/tutods/lib?style=for-the-badge)

<!-- omit from toc -->
## 🔄 CI/CD Status

[![Code Check][code-check-badge]](../../actions/workflows/code-check.yaml) [![Commit Lint][commit-lint-badge]](../../actions/workflows/commit-lint.yaml) [![Release PR][release-pr-badge]](../../actions/workflows/release-pr.yaml) [![Release][release-badge]](../../actions/workflows/release.yaml)

> A collection of reusable packages, configurations, and components for web development projects.

---
<!-- omit from toc -->
## Table of Contents
- [📄 Goal](#-goal)
  - [💡️ What you will find?](#️-what-you-will-find)
- [📦 Packages](#-packages)
- [🛠 Development](#-development)
  - [Getting Started](#getting-started)
- [📥 Installation](#-installation)
- [👥 Contributing](#-contributing)
- [🔗 More About Me](#-more-about-me)

## 📄 Goal

This monorepo has the purpose to store my common packages, used in my personal projects, like configs, components, hooks and many more. These packages help maintain consistency across projects and save development time by providing ready-to-use solutions for common needs.

### 💡️ What you will find?

This monorepo currently contains 3 packages, two of them dedicated to common configs used across multiple projects:

[![biome][biome]][biome-package] [![typescript][typescript]][typescript-package] [![components][components]][react-package]

Each package is designed to be lightweight, well-documented, and easy to integrate into your projects.

## 📦 Packages

To know more details about each package, please read the `README.md` file inside of each package folder:

- [**Biome Config**](./configs/biome-config/README.md) - Comprehensive configuration for Biome linter and formatter, ensuring consistent code style across projects
- [**TypeScript Config**](./configs/typescript-config/README.md) - TypeScript configurations for different project types with sensible defaults and strict type checking
- [**Components**](./packages/components/README.md) - Reusable React components built with accessibility and performance in mind

## 🛠 Development

This monorepo uses:
- **NX** for managing the monorepo
- **PNPM** as the package manager
- **Biome** for linting and formatting
- **Commitizen** for standardized commit messages
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
```

## 🔄 CI/CD

This monorepo uses automated workflows for continuous integration, testing, and deployment:

### Workflows

- **Code Check** - Runs Biome linting on every pull request
- **Commit Lint** - Validates commit messages follow conventional commits
- **Release PR** - Automatically creates release PRs when you push to main
- **Release** - Publishes packages to npm when release PR is merged
- **Performance Tracking** - Monitors CI/CD performance metrics

### Release Process

This project uses **automated releases** powered by NX Release and Conventional Commits:

1. **Push to main** with conventional commits (feat, fix, docs, etc.)
2. **Release PR** is automatically created with version bumps and changelogs
3. **Review and merge** the release PR
4. **Packages are published** to npm automatically
5. **Git tags** are created (`@tutods/package@version`)
6. **GitHub releases** are created with changelogs

For detailed information, see [Release Documentation](./docs/RELEASE.md).

### Performance Dashboard

View real-time CI/CD performance metrics: [Performance Dashboard](https://tutods.github.io/lib/perf-dashboard.html)

## 📥 Installation

You can install any of the packages individually using npm, yarn, or pnpm:

```bash
# Using npm
npm install @tutods/biome-config @tutods/typescript-config @tutods/components

# Using yarn
yarn add @tutods/biome-config @tutods/typescript-config @tutods/components

# Using pnpm
pnpm add @tutods/biome-config @tutods/typescript-config @tutods/components
```

Check each package's `README` for specific installation and usage instructions.

## 👥 Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes using Commitizen (`git cz`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and follow the existing code style.


## 🔗 More About Me

[![GitHub][github]](https://github.com/tutods) [![linkedin][linkedin]](https://linkedin.com/in/daniel-sousa-tutods) [![twitter][twitter]](https://twitter.com/dsousa_12) [![instragram][instagram]](https://instagram.com/dsousa_12)


<!-- Badges -->
[biome]: https://img.shields.io/badge/biome%20config-000000?style=for-the-badge&logo=biome&logoColor=white
[code-check-badge]: https://img.shields.io/github/actions/workflow/status/tutods/lib/code-check.yaml?branch=main&label=code%20check&logo=github&style=for-the-badge
[commit-lint-badge]: https://img.shields.io/github/actions/workflow/status/tutods/lib/commit-lint.yaml?branch=main&label=commit%20lint&logo=github&style=for-the-badge
[release-pr-badge]: https://img.shields.io/github/actions/workflow/status/tutods/lib/release-pr.yaml?branch=main&label=release%20pr&logo=github&style=for-the-badge
[release-badge]: https://img.shields.io/github/actions/workflow/status/tutods/lib/release.yaml?branch=main&label=release&logo=github&style=for-the-badge
[typescript]: https://img.shields.io/badge/typescript%20config-000000?style=for-the-badge&logo=typescript&logoColor=white
[components]: https://img.shields.io/badge/react%20components-000000?style=for-the-badge&logo=react&logoColor=white
[forks-shield]: https://img.shields.io/github/forks/tutods/lib?style=for-the-badge
[stars-shield]: https://img.shields.io/github/stars/tutods/lib?style=for-the-badge
[instagram]: https://img.shields.io/badge/instragram-000000?style=for-the-badge&logo=instagram&logoColor=white
[twitter]: https://img.shields.io/badge/twitter-000000?style=for-the-badge&logo=x&logoColor=white
[github]: https://img.shields.io/badge/github-000000?style=for-the-badge&logo=github&logoColor=white
[linkedin]: https://img.shields.io/badge/linkedin-000000?style=for-the-badge&logo=linkedin&logoColor=white

<!-- Links -->
[biome-package]: https://github.com/users/tutods/packages/npm/package/biome-config
[typescript-package]: https://github.com/users/tutods/packages/npm/package/typescript-config
[react-package]: https://github.com/users/tutods/packages/npm/package/component
[forks-url]: https://github.com/tutods/lib/network/members
[stars-url]: https://github.com/tutods/lib/stargazers