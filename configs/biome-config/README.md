<!-- omit from toc -->
# ![Biome Config](https://img.shields.io/badge/Biome-%40tutods%2Fbiome--config-60A5FA?logo=biome&logoSize=auto&style=for-the-badge)

![npm version](https://img.shields.io/npm/v/@tutods/biome-config?style=for-the-badge) ![npm downloads](https://img.shields.io/npm/dm/@tutods/biome-config?style=for-the-badge) ![License](https://img.shields.io/npm/l/@tutods/biome-config?style=for-the-badge)

---

## Table of Contents
- [Table of Contents](#table-of-contents)
- [📄 Goal](#-goal)
  - [💡️ What you will find?](#️-what-you-will-find)
- [✨ Features](#-features)
- [❓ How to install and use it?](#-how-to-install-and-use-it)
  - [Examples of usage](#examples-of-usage)
    - [React project (Vite, CRA)](#react-project-vite-cra)
    - [React + Tailwind CSS project](#react--tailwind-css-project)
    - [Next.js project](#nextjs-project)
    - [Next.js + Tailwind CSS + Sanity CMS](#nextjs--tailwind-css--sanity-cms)
    - [NestJS project](#nestjs-project)
    - [SolidJS project](#solidjs-project)
    - [Vanilla TypeScript project](#vanilla-typescript-project)
  - [Available configurations](#available-configurations)
- [🏗️ Monorepo Support](#️-monorepo-support)
- [🔧 Troubleshooting](#-troubleshooting)
  - [Single Quotes in CSS Selectors](#single-quotes-in-css-selectors)
- [📋 Compatibility](#-compatibility)
- [🤝 Contributing](#-contributing)


## 📄 Goal

This configuration package stores my common configurations used on **[Biome](https://biomejs.dev)** — the fast formatter and linter for JavaScript, TypeScript, JSX, JSON, CSS, and more.

Built with **monorepo support** in mind, every config uses glob patterns that work at any directory depth (`apps/*`, `packages/*`, etc.).

### 💡️ What you will find?

7 composable configurations. Extend only what you need:

| Config | Description |
|--------|-------------|
| **`base.json`** | Framework-agnostic core — formatting, VCS, file exclusions, and strict linting rules for any JS/TS project. Includes type-inference rules and auto-enables test domain rules when jest/vitest is detected. |
| **`react.json`** | React rules — hooks, fragments, a11y, `noReactForwardRef`. Uses the `react` domain (auto-activates when `react` is in `package.json`). |
| **`nextjs.json`** | Next.js rules — uses the `next` domain (auto-activates when `next >= 14` is detected). Includes App Router overrides (`noDefaultExport` off for pages/layouts/routes). Use together with `react.json`. |
| **`tailwind.json`** | Tailwind CSS utility class sorting via `useSortedClasses`. Supports `className`, `class`, `clsx`, `cva`, `cn`, `twMerge`, `tv`. |
| **`nestjs.json`** | NestJS — enables unsafe parameter decorators, disables a11y rules, turns off rules that conflict with NestJS patterns. Auto-enables test domain rules (Jest). |
| **`solidjs.json`** | SolidJS — uses the `solid` domain. Includes SolidStart entry point overrides. |
| **`sanity.json`** | Sanity CMS — overrides for `sanity.config.*`, `sanity.cli.*`, schema and studio directories (default exports allowed). |


## ✨ Features

- 🔍 **Comprehensive Linting** — Strict rules across `complexity`, `correctness`, `style`, `suspicious`, `security`, `performance`, `nursery`, and the `types` domain
- 🎨 **Consistent Formatting** — Uniform code style: single quotes, 2-space indent, 120 line width, trailing commas
- 🧩 **Composable Configs** — Mix and match only what your project needs
- 📦 **Monorepo-Ready** — All glob patterns use `**` for any directory depth. Supports the `"extends": "//"` microsyntax
- 🚀 **Biome v2 Domains** — Uses `react`, `next`, `solid`, `test`, `types` domains for automatic rule activation based on your dependencies
- 🔒 **Safe Nursery Rules** — Explicitly opt-in to stable nursery rules only; no `nursery.recommended: true`


## ❓ How to install and use it?

1. Install the package using your package manager:

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

2. Create the configuration file:

    ```bash
    pnpm biome init
    ```

3. Edit your `biome.json` to extend the configs you need:

    ```json
    {
      "$schema": "https://biomejs.dev/schemas/2.4.10/schema.json",
      "extends": ["@tutods/biome-config"]
    }
    ```

4. Add lint scripts to your `package.json`:

    ```json
    {
      "lint": "biome check .",
      "lint:fix": "biome check --no-errors-on-unmatched --write .",
      "lint:staged": "biome check --no-errors-on-unmatched --staged .",
      "lint:ci": "biome ci --no-errors-on-unmatched ."
    }
    ```

> **Note:** You can customize the scripts to fit your workflow.


### Examples of usage

#### React project (Vite, CRA)

```json
{
  "$schema": "https://biomejs.dev/schemas/2.4.10/schema.json",
  "extends": [
    "@tutods/biome-config",
    "@tutods/biome-config/react"
  ]
}
```

#### React + Tailwind CSS project

```json
{
  "$schema": "https://biomejs.dev/schemas/2.4.10/schema.json",
  "extends": [
    "@tutods/biome-config",
    "@tutods/biome-config/react",
    "@tutods/biome-config/tailwind"
  ]
}
```

#### Next.js project

Next.js projects extend **both** `react` and `nextjs`. The `next` domain auto-activates when `next` is found in `package.json`.

```json
{
  "$schema": "https://biomejs.dev/schemas/2.4.10/schema.json",
  "extends": [
    "@tutods/biome-config",
    "@tutods/biome-config/react",
    "@tutods/biome-config/nextjs"
  ]
}
```

#### Next.js + Tailwind CSS + Sanity CMS

```json
{
  "$schema": "https://biomejs.dev/schemas/2.4.10/schema.json",
  "extends": [
    "@tutods/biome-config",
    "@tutods/biome-config/react",
    "@tutods/biome-config/nextjs",
    "@tutods/biome-config/tailwind",
    "@tutods/biome-config/sanity"
  ]
}
```

#### NestJS project

```json
{
  "$schema": "https://biomejs.dev/schemas/2.4.10/schema.json",
  "extends": [
    "@tutods/biome-config",
    "@tutods/biome-config/nestjs"
  ]
}
```

#### SolidJS project

```json
{
  "$schema": "https://biomejs.dev/schemas/2.4.10/schema.json",
  "extends": [
    "@tutods/biome-config",
    "@tutods/biome-config/solidjs"
  ]
}
```

#### Vanilla TypeScript project

Just the base — no framework, no UI rules.

```json
{
  "$schema": "https://biomejs.dev/schemas/2.4.10/schema.json",
  "extends": [
    "@tutods/biome-config"
  ]
}
```


### Available configurations

| Export | Config | Use for |
|--------|--------|---------|
| `@tutods/biome-config` | `base.json` | Any JS/TS project |
| `@tutods/biome-config/react` | `react.json` | React (Vite, CRA, Remix) |
| `@tutods/biome-config/nextjs` | `nextjs.json` | Next.js (use with `react`) |
| `@tutods/biome-config/tailwind` | `tailwind.json` | Tailwind CSS projects |
| `@tutods/biome-config/nestjs` | `nestjs.json` | NestJS backends |
| `@tutods/biome-config/solidjs` | `solidjs.json` | SolidJS, SolidStart |
| `@tutods/biome-config/sanity` | `sanity.json` | Sanity CMS projects |


## 🏗️ Monorepo Support

All file inclusion/exclusion patterns use `**` globs that work at any directory depth. This means they work correctly in monorepo layouts like:

```
my-monorepo/
├── apps/
│   ├── web/          # Next.js app
│   ├── admin/        # React app
│   └── api/          # NestJS app
├── packages/
│   ├── ui/           # Shared UI components
│   └── utils/        # Shared utilities
├── configs/
│   └── biome-config/
└── biome.json
```

The root `biome.json` extends the base config:

```json
{
  "$schema": "https://biomejs.dev/schemas/2.4.10/schema.json",
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true,
    "defaultBranch": "main"
  },
  "extends": ["@tutods/biome-config"],
  "files": {
    "includes": [
      "!**/packages/**/package.json",
      "!**/configs/**/package.json",
      "!**/dist"
    ]
  }
}
```

Each app uses the `"extends": "//"` microsyntax to inherit from the root without needing a relative path:

```json
// apps/web/biome.json
{
  "extends": ["//", "@tutods/biome-config/react", "@tutods/biome-config/nextjs", "@tutods/biome-config/tailwind"]
}
```

```json
// apps/api/biome.json
{
  "extends": ["//", "@tutods/biome-config/nestjs"]
}
```

The `"//"` always resolves to the workspace root, regardless of nesting depth.


## 🔧 Troubleshooting

### Single Quotes in CSS Selectors

When using CSS selectors with single quotes (like `class*='size-'`) in JSX attributes, you may encounter issues with Biome's formatting. To resolve this:

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

- **Biome** v2.4.x
- **Node.js** v20+

Uses Biome v2 features:
- `linter.domains` for technology-specific rule groups (`react`, `next`, `solid`, `test`, `types`)
- `"extends": "//"` microsyntax for monorepo root inheritance
- Promoted nursery rules (`noUselessUndefined`, `useMaxParams`, `noImportCycles`, `noUnusedExpressions`, `useConsistentArrowReturn`, `noDeprecatedImports`)
- `assist.actions.source.organizeImports` for import sorting


## 🤝 Contributing

Issues and pull requests are welcome at [github.com/tutods/lib](https://github.com/tutods/lib).

---
*Last updated: Biome v2 domains + nextjs.json config restructure*
