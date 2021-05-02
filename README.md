# npm-lib-tmpl [![Release](https://github.com/rising3/npm-lib-tmpl/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/rising3/npm-lib-tmpl/actions/workflows/release.yml) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)[ ![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

## About

This repository is a template for JavaScript npm library.

## Highlights

* Fully automated release to:
  * GitHub Packages
  * GitHub Releases
* Add support for:
  * semantic-release
  * semantic-version
  * conventional-commits

## Requirements

* To host your code in a GitHub Repository
* Use the GitHub Actions as a Continuous Integration Service
  * Node.js v12 ot higher installed
  * Git CLI 2.7.1 or higher installed
* Use the GitHub Packages as a npm registry
* Use the GitHub Releases as a changelog

## Adding npm-lib-tmpl to your build

To add a registry for npm-lib-tmpl:

**.npmrc**
```
@rising3:registry=https://npm.pkg.github.com
```

To add a dependency on npm-lib-tmpl using npm, use the following:

```
$ npm install @rising3/npm-lib-tmpl@{latest}
```

To add a dependency on npm-lib-tmpl using yarn, use the following:

```
$ yarn add @rising3/npm-lib-tmpl@{latest}
```

### Usage to npm-lib-tmpl

**index.js**
``` javascript
const it = require('@rising3/npm-lib-tmpl')

console.log(it.sum(1, 2))
```
