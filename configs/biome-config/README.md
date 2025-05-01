# ![Biome Config](https://img.shields.io/badge/Biome-%40tutods%2Fbiome--config-60A5FA?logo=biome&logoSize=auto&style=for-the-badge)

![npm version](https://img.shields.io/npm/v/@tutods/biome-config?style=for-the-badge) ![npm downloads](https://img.shields.io/npm/dm/@tutods/biome-config?style=for-the-badge) ![License](https://img.shields.io/npm/l/@tutods/biome-config?style=for-the-badge)

---

## Table of Contents
- [](#)
  - [Table of Contents](#table-of-contents)
  - [📄 Goal](#-goal)
    - [💡️ What you will find?](#️-what-you-will-find)
  - [✨ Features](#-features)
  - [❓ How to install and use it?](#-how-to-install-and-use-it)
    - [Examples of usage](#examples-of-usage)
      - [React project](#react-project)
      - [Nest.js project](#nestjs-project)
      - [Next.js project (App Router)](#nextjs-project-app-router)
  - [🔧 Troubleshooting](#-troubleshooting)
    - [Single Quotes in CSS Selectors](#single-quotes-in-css-selectors)
  - [📋 Compatibility](#-compatibility)


## 📄 Goal

This configuration package has the purpose of store my common configurations used on **[Biome](https://biomejs.dev)**.

### 💡️ What you will find?

For now, you will found 4 configurations, being three of them based on the main one:

- **`base.json`**: stores the basic/global configuration with comprehensive linting rules for JavaScript/TypeScript projects;
- **`nestjs.jsonc`:** extends base configuration for **Nest.js** projects (allowing decorators, etc.);
- **`solidjs.json`:** extends base configuration for **SolidJS** projects, changing React-specific rules;
- **`nextjs.json`:** extends base configuration for **Next.js** projects (App Router), disabling `noDefaultExport` rule for specific Next.js files that require default exports.

## ✨ Features

- 🔍 **Comprehensive Linting** - Strict rules for code quality
- 🎨 **Consistent Formatting** - Uniform code style across projects
- 🧩 **Project-Specific Configs** - Tailored for different frameworks
- 🚀 **Easy Integration** - Simple setup with minimal configuration

## ❓ How to install and use it?

To install my package and use it is very simple, you only need to follow the steps below.


1. Install the package using your package manager (list of commands above): <br/>
   ![PNPM](https://img.shields.io/badge/PNPM-000?logo=pnpm&logoSize=auto&style=for-the-badge)
    ```bash
      pnpm add -D @tutods/biome-config @biomejs/biome
    ```
   ![Yarn](https://img.shields.io/badge/yarn-000?logo=yarn&logoSize=auto&style=for-the-badge)
    ```bash
      yarn add -D @tutods/biome-config @biomejs/biome
    ```
   ![npm](https://img.shields.io/badge/npm-000?logo=npm&logoSize=auto&style=for-the-badge)
    ```bash
      npm install -D @tutods/biome-config @biomejs/biome
    ```

1. Create the configuration file: <br/>
   ![PNPM](https://img.shields.io/badge/PNPM-000?logo=pnpm&logoSize=auto&style=for-the-badge)
    ```bash
      pnpm biome init
    ```
   ![Yarn](https://img.shields.io/badge/yarn-000?logo=yarn&logoSize=auto&style=for-the-badge)
    ```bash
      yarn biome init
    ```
   ![npm](https://img.shields.io/badge/npm-000?logo=npm&logoSize=auto&style=for-the-badge)
    ```bash
      npx biome init
    ```

1. On the `biome.json` file (generated on the previous step), remove everything except the `$schema` and `vcs`, adding
   the line above:
    ```json
      "extends": ["@tutods/biome-config"]
    ```
    - If you want to use the `nestjs`, `solidjs`, or `nextjs` config you only need to add another entry with
      `@tutods/biome-config/nestjs`, `@tutods/biome-config/solidjs`, or `@tutods/biome-config/nextjs` according to the configuration you want to use.

1. To finish, is missing to setup the scripts on your `package.json`, I usually use the following scripts:
    ```json
      "lint": "biome check .",
      "lint:fix": "biome check --no-errors-on-unmatched --write .",
      "lint:staged": "biome check --no-errors-on-unmatched --staged .",
      "lint:ci": "biome ci --no-errors-on-unmatched .",
    ```
   > ⚠️ **Note:** you can use your own scripts!

### Examples of usage

Below, you can find examples of usages:

- for a **React** project, using only the base configuration;
- for a **Nest.js** project, using the base configuration and the specific Nest.js configuration with specific rules;
- for a **Next.js** project, using the base configuration and the specific Next.js configuration with App Router rules.

#### React project

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "extends": [
    "@tutods/biome-config"
  ]
}
```

#### Nest.js project

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "extends": [
    "@tutods/biome-config",
    "@tutods/biome-config/nestjs"
  ]
}
```

#### Next.js project (App Router)

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "extends": [
    "@tutods/biome-config",
    "@tutods/biome-config/nextjs"
  ]
}
```

## 🔧 Troubleshooting
### Single Quotes in CSS Selectors

When using CSS selectors with single quotes (like class*='size-' ) in JSX attributes, you may encounter issues with Biome's formatting. To resolve this:

1. Use template literals for className strings with complex selectors:
```jsx
className={`component [&_svg:not([class*='size-'])]:size-4`}
```
2. Or escape the single quotes in your selectors:
```jsx
className="component [&_svg:not([class*=\\'size-\\'])]:size-4"
```

## 📋 Compatibility
This configuration package is tested with:

- **Biome** v1.9.x
- **Node.js** v18+