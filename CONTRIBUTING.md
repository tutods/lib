# Contributing to TutoDS Lib

Thank you for your interest in contributing to this monorepo! This document provides guidelines and instructions for contributing.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Commit Message Conventions](#commit-message-conventions)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Release Process](#release-process)

## 🤝 Code of Conduct

This project adheres to a code of conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [daniel.sousa.tutods@gmail.com](mailto:daniel.sousa.tutods@gmail.com).

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v20 or higher
- **pnpm**: Latest version (recommended) or npm/yarn
- **Git**: Latest version

### Setup

1. **Fork and clone the repository**

```bash
git clone https://github.com/your-username/lib.git
cd lib
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Build all packages**

```bash
pnpm build
```

## 👨‍💻 Development Workflow

### Branch Naming

Use descriptive branch names:

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `refactor/` - Code refactoring
- `test/` - Adding or updating tests
- `chore/` - Maintenance tasks

Examples:
```bash
feature/button-component
fix/input-validation
docs/update-readme
refactor/optimize-build
```

### Making Changes

1. **Create a new branch**

```bash
git checkout -b feature/your-feature-name
```

2. **Make your changes**

3. **Lint and format your code**

```bash
pnpm lint:fix
```

4. **Commit your changes** (using Commitizen)

```bash
pnpm commit
```

Follow the [Commit Message Conventions](#commit-message-conventions) below.

5. **Push to your fork**

```bash
git push origin feature/your-feature-name
```

6. **Create a Pull Request**

See [Pull Request Guidelines](#pull-request-guidelines).

## 📝 Commit Message Conventions

We use **Conventional Commits** to automate versioning and changelog generation.

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

- **`feat`**: New feature
- **`fix`**: Bug fix
- **`docs`**: Documentation changes
- **`style`**: Code style changes (formatting, etc.)
- **`refactor`**: Code refactoring
- **`test`**: Adding or updating tests
- **`chore`**: Maintenance tasks
- **`ci`**: CI/CD changes
- **`perf`**: Performance improvements
- **`revert`**: Revert a previous commit

### Scopes

Common scopes include:
- `components` - React components
- `biome-config` - Biome configuration
- `typescript-config` - TypeScript configuration
- `ci` - CI/CD workflows
- `docs` - Documentation

### Examples

```bash
feat(components): add Button component with variants

Add a new Button component with primary, secondary, and outline variants.
Supports custom className and onClick handler.

Closes #123
```

```bash
fix(biome-config): resolve Tailwind CSS sorting conflict

Update tailwind.json to properly handle Tailwind utility class sorting
when used with clsx and cva.
```

```bash
docs: update contributing guide with new workflow

Add detailed instructions for the PR review process and
automated release workflow.
```

### Using Commitizen

We provide a CLI tool to help you write proper commit messages:

```bash
pnpm commit
```

Follow the interactive prompts to create your commit message.

## 📎 Pull Request Guidelines

### Before Creating a PR

- [ ] Code follows the project's coding standards
- [ ] Code is properly linted (`pnpm lint:fix`)
- [ ] Commit messages follow conventional commits
- [ ] Tests pass (if applicable)
- [ ] Documentation is updated (if needed)

### PR Title

Use the same format as commit messages:

```
feat(components): add Button component
fix(biome-config): resolve Tailwind sorting
docs: update README with new examples
```

### PR Description

Include:

1. **What** - Brief description of changes
2. **Why** - Reason for the change
3. **How** - Implementation approach (if complex)
4. **Related issues** - Link to related issues
5. **Screenshots** - For UI changes (if applicable)

### Template

```markdown
## What
Brief description of what this PR does.

## Why
Reason for these changes.

## How
Technical approach (if needed).

## Related
- Closes #123
- Related to #456

## Checklist
- [ ] Code follows project standards
- [ ] Tests pass
- [ ] Documentation updated
```

## 🎨 Coding Standards

### Biome Configuration

This project uses **Biome** for linting and formatting. Configuration is provided by `@tutods/biome-config`.

**Run linter:**
```bash
pnpm lint
```

**Auto-fix issues:**
```bash
pnpm lint:fix
```

### Code Style

- **Indentation**: 2 spaces
- **Quotes**: Single quotes
- **Semicolons**: Required
- **Trailing commas**: Enabled
- **Line width**: 120 characters
- **File naming**: `kebab-case.ts` or `kebab-case.tsx`

### TypeScript Guidelines

- **Strict mode**: Always use strict TypeScript
- **No implicit any**: Avoid `any` type
- **Return types**: Explicit return types for functions
- **Interfaces vs Types**: Use `interface` for object shapes, `type` for unions/intersections

### React Guidelines

- **Functional components**: Only use functional components with hooks
- **Props interfaces**: Define props with TypeScript interfaces
- **Default exports**: Avoid; use named exports
- **Component naming**: PascalCase for components
- **File organization**: Co-locate styles, tests, and components

## 🧪 Testing

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests for a specific package
pnpm test --filter @tutods/components
```

### Test Guidelines

- **Unit tests**: Test individual functions and components
- **Integration tests**: Test component interactions
- **Coverage**: Aim for 80%+ coverage

## 🚀 Release Process

This project uses **automated releases** powered by:

1. **Conventional Commits** - Determine version bump (major/minor/patch)
2. **NX Release** - Generate changelogs and bump versions
3. **GitHub Actions** - Automatically create Release PRs
4. **npm Registry** - Publish on merge

### How It Works

1. **Push to main** with conventional commits
2. **Release PR** is automatically created (`release/next` branch)
3. **Review and merge** the Release PR
4. **Packages are published** to npm automatically
5. **Git tags** are created (`@tutods/package@version`)
6. **GitHub releases** are created with changelogs

### Triggering a Release

Any commit to `main` that matches these types triggers a version bump:

- `feat` - Minor version bump (0.x.0 → 0.x+1.0)
- `fix` - Patch version bump (0.0.x → 0.0.x+1)
- `docs`, `refactor`, `chore`, `ci`, `style` - Patch version bump

### Example

```bash
# This triggers a minor version bump
git commit -m "feat(components): add Modal component"

# This triggers a patch version bump
git commit -m "fix(components): resolve Button onClick issue"

# This triggers a patch version bump
git commit -m "docs: update README with new examples"
```

See [`docs/RELEASE.md`](docs/RELEASE.md) for detailed release documentation.

## 📧 Getting Help

- **Issues**: [GitHub Issues](https://github.com/tutods/lib/issues)
- **Discussions**: [GitHub Discussions](https://github.com/tutods/lib/discussions)
- **Email**: [daniel.sousa.tutods@gmail.com](mailto:daniel.sousa.tutods@gmail.com)

## 📄 License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---

Thank you for contributing! 🎉
