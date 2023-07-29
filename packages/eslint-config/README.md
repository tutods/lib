# ESLint Config <small>(`@tutods/eslint-config`)</small>

[![NPM Version][npm-version-shield]][npm-link] [![NPM Downloads][npm-downloads-shield]][npm-link] ![License][npm-license-shield]

---

## ▶️ Installation

**Using Yarn:**

> `yarn add -D @tutods/eslint-config`

**Using NPM:**

> `npm i -D @tutods/eslint-config`

**Using PNPM:**

> `pnpm add -D @tutods/eslint-config`

## 📄 Usage

With this package, multiple configurations are exported. You need to pick the ones you will use.

> **Note:** probably some configurations use others, like `/react-tsx` uses `/react` configuration.

### Configurations available

- `/javascript`;
- `/typescript`;
- `/react`;
- `/react-tsx`;
- `/next`;
- `/tailwind`;
- `/node`;
- `/imports`;
- `/prettier`;
- `/sort-imports`;
- `/sort-keys`

### Extends on your **ESLint** configuration

> **Example:**
>
> ```json
> {
>   "extends": [
>     "@tutods/eslint-config/next",
>     "@tutods/eslint-config/tailwind",
>     "@tutods/eslint-config/sort-keys"
>   ]
> }
> ```
>
> This **ESLint** configuration uses **Next.js** (with **TS**) + **TailwindCSS** + **keys and destructuring keys sorting** configurations.

### Peers Dependencies

Depending on the configuration you choose, you need to install some dependencies, examples:

#### `/prettier` configuration

For use my **Prettier** configuration, you need to install the following packages:

- `prettier`;
- `eslint-config-prettier`;
- `eslint-plugin-prettier`.

[![Prettier](https://img.shields.io/badge/prettier%20config-000000?style=for-the-badge&logo=npm&logoColor=white)](../prettier-config/README.md)

## Getting Started

This repository contains the **ESLint** and **Prettier** configuration used on my projects.

### What's included?

- Rules to sort imports;
- Rules to sort object keys and destructuring;
- Avoid the usage of `../` or `./` on imports;
- Avoid the multiples imports from same file in multiple lines (grouping into one);
- **(REACT)** Sort component props;
- **(REACT)** For boolean props, remove the `={true}`;
- **(REACT)** Remove unnecessary curly braces (example: `={'value'}` will be fixed to `="value"`).

### Installation

To use this **ESLint** config. you need to follow the steps below:

1. Install the package:

- **NPM:** `npm i -D eslint prettier @tutods/eslint-config`;
- **Yarn:** `yarn add -D eslint prettier @tutods/eslint-config`;
- **PNPM:** `pnpm add -D eslint prettier @tutods/eslint-config`.

2. Create **ESLint** config. file (if it does not exist) - `.eslintrc.json` - and past the content
   below:

- **For React:**

```json
{
  "extends": ["@tutods/eslint-config/react"]
}
```

- **For Node.js:**

```json
{
  "extends": ["@tutods/eslint-config/node"]
}
```

3. Your **ESLint** config. is ready!

## About Me

[![GitHub](https://img.shields.io/badge/github-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tutods) [
![linkedin](https://img.shields.io/badge/linkedin-000000?style=for-the-badge&logo=linkedin&logoColor=white)
](https://linkedin.com/in/daniel-sousa-tutods)
[![twitter](https://img.shields.io/badge/twitter-000000?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/dsousa_12)
[![instragram](https://img.shields.io/badge/instragram-000000?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/dsousa_12)

<!-- Links -->

[npm-version-shield]: https://img.myrandomwebs.com/npm/v/@tutods/eslint-config.svg?label=@tutods/eslint-config&icon=npm
[npm-license-shield]: https://img.shields.io/npm/l/@tutods/eslint-config.svg
[npm-downloads-shield]: https://img.shields.io/npm/dm/@tutods/eslint-config.svg
[npm-link]: https://www.npmjs.com/package/@tutods/eslint-config
