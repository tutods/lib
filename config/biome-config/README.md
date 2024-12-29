# ![Biome Config](https://img.shields.io/badge/Biome-%40tutods%2Fbiome--config-60A5FA?logo=biome&logoSize=auto&style=for-the-badge)

---

## 📄 Goal

This configuration package has the purpose of store my common configurations used on **[Biome](https://biomejs.dev)**.

### 💡️ What you will find?

For now, you will found 3 configurations, being two of them based on the main one:

- **`base.json`**: stores the basic/global configuration;
- **`nestjs.jsonc`:** stores the configuration for **NestJS** projects (allowing decorators, etc.);
- **`solidjs.json`:** stores the configuration for **SolidJS** projects, changing a few linter rules (like
  `noReactSpecificProps`).

## ❓ How to install and use it?

To install my package and use it is very simple, you only need to following the steps above.

1. Create the `.npmrc` file with:
    ```bash
      @tutods:registry=https://npm.pkg.github.com
    ```
2. Install the package using your package manager (list of commands above): <br/>
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

3. Create the configuration file: <br/>
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

4. On the `biome.json` file (generated on the previous step), remove everything except the `$schema` and `vcs`, adding
   the line above:
    ```json
      "extends": ["@tutods/biome-config"]
    ```
    - If you want to use the `nestjs` or `solidjs` config you only need to add another entry with
      `@tutods/biome-config/nestjs` or `@tutods/biome-config/solidjs` according to the configuration you want to use.

5. To finish, is missing to setup the scripts on your `package.json`, I usually use the following scripts:
    ```json
      "lint": "biome check .",
      "lint:fix": "biome check --no-errors-on-unmatched --write .",
      "lint:staged": "biome check --no-errors-on-unmatched --staged .",
      "lint:ci": "biome ci --no-errors-on-unmatched .",
    ```
   > ⚠️ **Note:** you can use your own scripts!

### Examples of usage

Below, you can find two examples of usages:

- for a **React** project, using only the base configuration;
- for a **Nest.js** project, using the base configuration and the specific Nest.js configuration with specific rules.

#### React project

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "extends": [
    "@tutods/biome-config"
  ]
}
```

#### Nest.js Project

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "extends": [
    "@tutods/biome-config",
    "@tutods/biome-config/nestjs"
  ]
}
```