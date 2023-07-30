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

On this way, you need to access your `package.json` and add the following values:

```json
{
  //  ...
  "prettier": "@tutods/prettier.config"
  //  ...
}
```

### Via `.prettierrc` <small>(`json` format)</small>

Simple as create the `.prettierrc` file and paste:

```json
"@tutods/prettier-config"
```

<br />

Don't forget that you can use my [**ESLint** config](../eslint-config/README.md) to add **Prettier** validations on your code.

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
