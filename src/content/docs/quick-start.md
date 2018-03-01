---
path: '/docs/quick-start'
date: '2018-02-16'
title: 'Getting started'
sectionTitle: 'Essentials'
section: 1
subsection: 2
---

# Get started

Frontwerk requires [NodeJS][node] and either [npm][npm] or [yarn][yarn].

> Compatibility note: Frontwerk requires NodeJS v8.4 or greater because it uses ES6 features that are not available in previous versions of node.

Frontwerk assumes basic knowledge of the underlying tools used. These include [ESLint][eslint], [Jest][jest], [Prettier][prettier], [Stylelint][stylelint], [Babel][babel], [Webpack][webpack] and [Rollup][rollup]. Please note however, this is **not** required unless you want to extend the default configurations provided by Frontwerk.

## Install Frontwerk

This module is distributed via [npm][npm] which is bundled with [node][node] and should be installed as one of your project's `devDependencies` via either npm:

```bash
npm install frontwerk --save-dev
```

or with [yarn][yarn]:

```bash
yarn add frontwerk
```

### Use Frontwerk

Frontwerk is a CLI and exposes a bin called `frontwerk`. You can run

```bash
frontwerk
```

with no arguments to show a list of available commands.

You can then simply ammend your `package.json`'s `scripts` property to include the scripts you want to use:

```json
{
  "scripts": {
    "lint:js": "frontwerk lint",
    "lint:css": "frontwerk stylelint",
    "test": "frontwerk test --no-watch",
    "test:watch": "frontwerk test",
    "build": "frontwerk build",
    "format": "frontwerk format"
  }
}
```

#### Overriding the configuration

Although it works out of the box, Frontwerk allows you to specify your own config for the various scripts, either by extending the config provided or just by using your own, depending on the script. Frontwerk respects the convention used by each of its underlying tools (eslint, stylelint, flow, etc.). Basically, if it's possible with that tool, it's possible with frontwerk.

You can find more extensive documentation about each tool in this guide.

[Guides: Linting Javascript][guides-linting]

[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
[node]: https://nodejs.org
[eslint]: https://eslint.org/
[jest]: https://facebook.github.io/jest/
[prettier]: https://prettier.io/
[stylelint]: https://stylelint.io/
[babel]: https://babeljs.io/
[webpack]: https://webpack.js.org/
[rollup]: https://rollupjs.org/
[guides-linting]: /docs/code-linting
