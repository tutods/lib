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
    - **NPM:** `npm i -D @tutods/eslint-config`;
    - **Yarn:** `yarn add -D @tutods/eslint-config`;
    - **PNPM:** `pnpm add -D @tutods/eslint-config`.

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

[![Facebook][facebook]][facebook-url] [![Twitter][twitter]][twitter-url] [![Linkedin][linkedin]][linkedin-url] [![GitHub][github]][github-url]
[![GitLab][gitlab]][gitlab-url] [![Rocketseat][rocketseat]][rocketseat-url]


[forks-shield]: https://img.shields.io/github/forks/tutods/tailwindcss-travel-website?style=for-the-badge
[forks-url]: https://github.com/tutods/tailwindcss-travel-website/network/members
[stars-shield]: https://img.shields.io/github/stars/tutods/tailwindcss-travel-website?style=for-the-badge
[stars-url]: https://github.com/tutods/tailwindcss-travel-website/stargazers
[rocketseat]: https://img.shields.io/badge/Rocketseat-1E4174?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg==
[rocketseat-url]: https://app.rocketseat.com.br/me/tutods14
[gitlab]: https://img.shields.io/badge/GitLab-1E4174?style=for-the-badge&logo=GitLab&logoColor=white
[gitlab-url]: https://gitlab.com/jdaniel.asousa
[github]: https://img.shields.io/badge/-Github-1E4174?style=for-the-badge&logo=Github&logoColor=white&link=https://github.com/tutods
[github-url]: https://github.com/tutods
[facebook]: https://img.shields.io/badge/Facebook-1E4174?style=for-the-badge&logo=facebook&logoColor=white
[facebook-url]: https://facebook.com/tutods2014
[twitter]: https://img.shields.io/badge/Twitter-1E4174?style=for-the-badge&logo=twitter&logoColor=white
[twitter-url]: https://twitter.com/dsousa_12/
[linkedin]: https://img.shields.io/badge/Linkedin-1E4174?style=for-the-badge&logo=Linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/daniel-sousa-tutods/