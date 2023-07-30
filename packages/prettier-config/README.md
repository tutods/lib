# Prettier Config <small>(`@tutods/prettier-config`)</small>

[![NPM Version][npm-version-shield]][npm-link] [![NPM Downloads][npm-downloads-shield]][npm-link] ![License][npm-license-shield] [![Changelog][changelog-shield]](CHANGELOG.md)

---

## ▶️ Installation

**Using Yarn:**

> `yarn add -D @tutods/prettier-config`

**Using NPM:**

> `npm i -D @tutods/prettier-config`

**Using PNPM:**

> `pnpm add -D @tutods/prettier-config`

## 📄 Usage

This package exports one configuration, so to use it, you only need to extend it. For that, you have two possible ways
of do it.

### Via `package.json`

### Via `.prettierrc` <small>(`json` format)</small>

With this package, multiple configurations are exported. You need to pick the ones you will use.

For use any of these **ESLint** configurations, you need to create the file `.eslintrc` on the root directory of you
project and use the `"extends": []` to load the configurations you want.
See the example below.

> **Example:**
>
> **file:** `.eslintrc`
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
> **Note:** This **ESLint** configuration uses **Next.js** (with **TS**) + **TailwindCSS** + **sort keys and destructure
> keys** configurations.

## About Me

[![GitHub](https://img.shields.io/badge/github-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tutods) [
![linkedin](https://img.shields.io/badge/linkedin-000000?style=for-the-badge&logo=linkedin&logoColor=white)
](https://linkedin.com/in/daniel-sousa-tutods)
[![twitter](https://img.shields.io/badge/twitter-000000?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/dsousa_12)
[![instragram](https://img.shields.io/badge/instragram-000000?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/dsousa_12)

<!-- Links -->

[npm-version-shield]: https://img.myrandomwebs.com/npm/v/@tutods/prettier-config.svg?label=@tutods/prettier-config&icon=npm
[changelog-shield]: https://img.myrandomwebs.com/npm/v/@tutods/prettier-config.svg?label=Changelog&icon=npm
[npm-license-shield]: https://img.shields.io/npm/l/@tutods/prettier-config.svg
[npm-downloads-shield]: https://img.shields.io/npm/dm/@tutods/prettier-config.svg
[npm-link]: https://www.npmjs.com/package/@tutods/prettier-config
