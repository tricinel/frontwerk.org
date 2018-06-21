---
path: '/docs/test'
date: '2018-02-16'
title: 'Testing'
sectionTitle: 'Tooling'
section: 2
subsection: 3
---

# Testing with Jest

Frontwerk uses [Jest][jest] under the hood to run your tests.

## Default configuration

You can run the following command and have Jest run your tests and watch your files for changes, re-running the tests on every change.

```bash
frontwerk test
```

> The above command assumes that you follow Jest's naming conventions for your test files, meaning your test files are named `.test.js` inside `__tests__` folders. It also assumes you have structured your project to have a `src` folder where your Javascript lives.

By default, Frontwerk will use the following jest rules:

```json
{
  "roots": "src",
  "testEnvironment":
    "jsdom (if not using webpack or rollup or react) or node otherwise",
  "collectCoverageFrom": ["src/**/*.+(js|jsx)"],
  "testMatch": ["**/__tests__/**/*.+(js|jsx)"],
  "testPathIgnorePatterns": [
    "/node_modules/",
    "/fixtures/",
    "/__tests__/helpers/",
    "__mocks__"
  ],
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "/fixtures/",
    "/__tests__/helpers/",
    "__mocks__",
    "src/(umd|cjs|esm)-entry.js$",
    ".stories.js$"
  ],
  "transformIgnorePatterns": ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": 80
    }
  },
  "watchPlugins": [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ]
}
```

## Overriding the defaults

You can easily extend the configuration of this default config.

> Note that any args you pass to `frontwerk test` will be forwarded to Jest.

**Config**

There are two possible ways to extend or create your jest config.

1. Create a file named `jest.config.js` in your project root and pass it using the `--config` to your test task.
2. Have a `jest` property in your `package.json`.

You can override the default config by creating a `jest.config.js` file.

```javascript
const { jest: jestConfig } = require('frontwerk/config');
module.exports = Object.assign(jestConfig, {
  // your overrides here
});
```

And then pass a `--config` flag to your `frontwerk test` task with a path to a file to use as a configuration file.

```json
{
  "scripts": {
    "test": "frontwerk test --config ./jest.config.js"
  }
}
```

**Options**

There are a few CLI flags you can use:

* `--no-watch` will not watch the files for changes. The default is `watch`.
* `--coverage` will display a coverage report and also override `watch`.
* `--updateSnapshot` will update snapshots and also override `watch`.

> Please note that Jest watch will not work if the project you are working on is not under version control. `--watch` automatically passes the `--onlyChanged` flag under the hood and that will require either a git or hg repo.

[Next up: Code formatting][code-formatting]

[jest]: https://facebook.github.io/jest/
[code-formatting]: /docs/format
