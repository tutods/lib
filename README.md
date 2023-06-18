# ESLint & Prettier Configuration

[![Stargazers][stars-shield]][stars-url] [![Forks][forks-shield]][forks-url]

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

2. Create **ESLint** config. file (if it does not exist) - `.eslintrc.json` - and past the content below:
    - **For React:**
    ```json
    {
      "extends": [
        "@tutods/eslint-config/react"
      ]
    }
    ```
   - **For Node.js:**
   ```json
    {
      "extends": [
        "@tutods/eslint-config/node"
      ]
    }
    ```

3. Your **ESLint** config. is ready!

## About Me

[![Twitter][twitter]][twitter-url] [![Linkedin][linkedin]][linkedin-url] [![GitHub][github]][github-url]


[forks-shield]: https://img.shields.io/github/forks/tutods/tailwindcss-travel-website?style=for-the-badge
[forks-url]: https://github.com/tutods/tailwindcss-travel-website/network/members
[stars-shield]: https://img.shields.io/github/stars/tutods/tailwindcss-travel-website?style=for-the-badge
[stars-url]: https://github.com/tutods/tailwindcss-travel-website/stargazers
[github]: https://img.shields.io/badge/-Github-1E4174?style=for-the-badge&logo=Github&logoColor=white&link=https://github.com/tutods
[github-url]: https://github.com/tutods
[twitter]: https://img.shields.io/badge/Twitter-1E4174?style=for-the-badge&logo=twitter&logoColor=white
[twitter-url]: https://twitter.com/dsousa_12/
[linkedin]: https://img.shields.io/badge/Linkedin-1E4174?style=for-the-badge&logo=Linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/daniel-sousa-tutods/