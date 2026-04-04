<!-- omit from toc -->
# ![TypeScript Config](https://img.shields.io/badge/TypeScript-%40tutods%2Ftypescript--config-3178C6?logo=typescript&logoSize=auto&style=for-the-badge)

![npm version](https://img.shields.io/npm/v/@tutods/typescript-config?style=for-the-badge) ![npm downloads](https://img.shields.io/npm/dm/@tutods/typescript-config?style=for-the-badge) ![License](https://img.shields.io/npm/l/@tutods/typescript-config?style=for-the-badge)

---

## Table of Contents
- [Table of Contents](#table-of-contents)
- [📄 Goal](#-goal)
- [💡 What you will find?](#-what-you-will-find)
- [✨ Features](#-features)
- [❓ How to install and use it?](#-how-to-install-and-use-it)
- [📚 Examples of usage](#-examples-of-usage)
  - [React project](#react-project)

## 📄 Goal

This configuration package provides common TypeScript configurations that can be used across different project types. It aims to standardize TypeScript settings across your projects while reducing the boilerplate configuration needed for each new project.

## 💡 What you will find?

This package includes TypeScript configurations for:

- **`base.json`**: Base TypeScript configuration with strict type checking and modern ES targets
- **`react.json`**: Configuration optimized for React projects with JSX support
- **`node.json`**: Configuration optimized for Node.js projects
- **`nestjs.json`**: Configuration optimized for NestJS backend applications

## ✨ Features

- 🔍 **Type Safety** - Strict type checking for better code quality
- 🎯 **Project-Specific Configs** - Tailored for different environments
- 🚀 **Easy Integration** - Simple setup with minimal configuration
- 🔄 **Consistent Settings** - Standardized TypeScript settings across projects
- 🛠️ **Best Practices** - Incorporates TypeScript community best practices

## ❓ How to install and use it?

To install and use this package, follow these steps:

1. Install the package using your package manager: <br/>
   ![PNPM](https://img.shields.io/badge/PNPM-000?logo=pnpm&logoSize=auto&style=for-the-badge)
    ```bash
    pnpm add -D @tutods/typescript-config typescript
    ```
   ![Yarn](https://img.shields.io/badge/yarn-000?logo=yarn&logoSize=auto&style=for-the-badge)
    ```bash
    yarn add -D @tutods/typescript-config typescript
    ```
   ![npm](https://img.shields.io/badge/npm-000?logo=npm&logoSize=auto&style=for-the-badge)
    ```bash
    npm install -D @tutods/typescript-config typescript
    ```

2. Create a `tsconfig.json` file in your project root and extend the configuration

## 📚 Examples of usage

### React project

```json
{
  "extends": "@tutods/typescript-config/react.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

### Node.js project

```json
{
  "extends": "@tutods/typescript-config/node.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

### NestJS project

```json
{
  "extends": "@tutods/typescript-config/nestjs.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@common/*": ["./src/common/*"],
      "@modules/*": ["./src/modules/*"]
    }
  },
  "include": ["src"]
}
```

```json
{
  "extends": "@tutods/typescript-config/react.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}