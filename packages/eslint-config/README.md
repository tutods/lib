# ESLint Config <small>(`@tutods/eslint-config`)</small>

[![NPM Version][npm-version-shield]][npm-link] [![NPM Downloads][npm-downloads-shield]][npm-link] ![License][npm-license-shield]

---

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

[![Twitter][twitter]][twitter-url] [![Linkedin][linkedin]][linkedin-url]
[![GitHub][github]][github-url]

<!-- Links -->

[npm-version-shield]: https://img.myrandomwebs.com/npm/v/@tutods/eslint-config.svg?label=@tutods/eslint-config&icon=npm
[npm-license-shield]: https://img.shields.io/npm/l/@tutods/eslint-config.svg
[npm-downloads-shield]: https://img.shields.io/npm/dm/@tutods/eslint-config.svg
[npm-link]: https://www.npmjs.com/package/@tutods/eslint-config
