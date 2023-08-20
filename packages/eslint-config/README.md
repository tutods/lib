# ESLint Config <small>(`@tutods/eslint-config`)</small>

[![NPM Version][npm-version-shield]][npm-link] [![NPM Downloads][npm-downloads-shield]][npm-link] ![License][npm-license-shield] [![Changelog][changelog-shield]](CHANGELOG.md)

---

## ▶️ Installation

**Using NPM:**
`npm i -D @tutods/eslint-config`

**Using Yarn:**
`yarn add -D @tutods/eslint-config`

**Using PNPM:**
`pnpm add -D @tutods/eslint-config`

## 📄 Usage

With this package, multiple configurations are exported. You need to pick the ones you will use.

> **Note:** probably some configurations use others, like `/react` extends `/javascript` and `/typescript` configuration.

### Configurations available

- `/javascript`;
- `/typescript`;
- `/react`;
- `/next`;
- `/tailwind`;
- `/node`;
- `/imports`;
- `/prettier`;
- `/sort-imports`;
- `/sort-keys`

### Use **ESLint** configuration

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

### Peers Dependencies

Depending on the configuration you choose, you need to install some dependencies, examples:

### `/react` configuration

For use my **React** configuration, you need to install the following packages:

- `javascript` <small>**(for `.js` and `.jsx` files)**</small>;
- `typescript` <small>**(for `.ts` and `.tsx` files)**</small>;
  - `@typescript-eslint/eslint-plugin`;
  - `@typescript-eslint/parser`;
- `eslint-plugin-jsx-a11y`;
- `eslint-plugin-react`;
- `eslint-plugin-react-hooks`.

> If you (for example) use the `/next` config, all the dependencies listed above will be needed, because that's config extends the `/react` config.
>
> **Note:** if you are extending `next/core-web-vitals`, you don't need to install the `eslint-plugin-react-hooks` pacakge.

#### `/prettier` configuration

For use my **Prettier** configuration, you need to install the following packages:

- `prettier`;
- `eslint-config-prettier`;
- `eslint-plugin-prettier`.

[![Prettier](https://img.shields.io/badge/prettier%20config-000000?style=for-the-badge&logo=npm&logoColor=white)](../prettier-config/README.md)

## About Me

[![GitHub](https://img.shields.io/badge/github-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tutods) [
![linkedin](https://img.shields.io/badge/linkedin-000000?style=for-the-badge&logo=linkedin&logoColor=white)
](https://linkedin.com/in/daniel-sousa-tutods)
[![twitter](https://img.shields.io/badge/twitter-000000?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/dsousa_12)
[![instragram](https://img.shields.io/badge/instragram-000000?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/dsousa_12)

<!-- Links -->

[npm-version-shield]: https://img.myrandomwebs.com/npm/v/@tutods/eslint-config.svg?label=@tutods/eslint-config&icon=npm
[changelog-shield]: https://img.myrandomwebs.com/npm/v/@tutods/eslint-config.svg?label=Changelog&icon=npm
[npm-license-shield]: https://img.shields.io/npm/l/@tutods/eslint-config.svg
[npm-downloads-shield]: https://img.shields.io/npm/dm/@tutods/eslint-config.svg
[npm-link]: https://www.npmjs.com/package/@tutods/eslint-config
