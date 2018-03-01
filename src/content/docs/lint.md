---
path: '/docs/lint'
date: '2018-02-16'
title: 'Linting Javascript'
sectionTitle: 'Tooling'
section: 2
subsection: 1
---

# Linting with ESLint

Frontwerk uses [ESLint][eslint] under the hood to lint your javascript files.

## Default configuration

You can run the following command and have ESLint lint your Javascript.

```bash
frontwerk lint
```

> The above command will format every `js` in your root, recursively, **including** any files inside `node_modules`. It is advisable to create a `.eslintignore` file in your project root and exclude `node_modules` at least.

By default, Frontwerk will use the following ESLint presets and plugins:

**Presets**

* [eslint-config-airbnb][eslint-config-airbnb] if your project uses React
* [eslint-config-airbnb-base][eslint-config-airbnb-base] if your project does
  **not** use React
* [eslint-config-prettier][eslint-config-prettier]

**Plugins**

* [eslint-plugin-prettier][eslint-plugin-prettier]
* [eslint-plugin-import][eslint-plugin-import] if your project uses React
* [eslint-plugin-react][eslint-plugin-react] if your project uses React
* [eslint-plugin-jsx-a11y][eslint-plugin-jsx-a11y] if your project uses React

**Additional rules**

Any additional rules can be found in the
[default config](https://github.com/tricinel/frontwerk/blob/master/src/config/eslintrc.js).

> Note that any args you pass to `frontwerk lint` will be forwarded to eslint.

## Overriding the defaults

Frontwerk follows ESLint's way of creating configuration and ignore files.

**Config**

There are three possible ways to extend or create your eslint config.

1. Create a file named `.eslintrc` or `.eslintrc.js` in your project root.
2. Have an `eslintConfig` property in your `package.json`.
3. Pass a `--config` argument with your lint task.

You can override the default config by creating an `.eslintrc.js` or `.eslintrc` file and either by extending the default or completing replacing it with your own.

```json
{
  "extends": "./node_modules/frontwerk/eslint.js",
  "rules": {}
}
```

or

```json
{
  "extends": "google"
}
```

You can also add a property `eslintConfig` to your `package.json` and extend or replace the defaults there.

```json
{
  "eslintConfig": {
    "extends": "./node_modules/frontwerk/eslint.js"
  }
}
```

Another way to do it is by passing a `--config` flag to your `frontwerk lint` task with a path to a file to use as a configuration file.

```json
{
  "scripts": {
    "lint": "frontwerk lint --config ./myconfig.js"
  }
}
```

**Ignore**

There are three possible ways to create your own eslint ignore.

1. Create a file named `.eslintignore` in your project root.
2. Pass a `--ignore-path` argument with your lint task.
3. Have an `eslintIgnore` property in your `package.json`.

> Note that eslintignore is _coincidentally_ ignored, so until [this issue](https://github.com/eslint/eslint/issues/9227) is resolved, please pass the eslint ignore as allowed by [eslint's configuration](https://eslint.org/docs/user-guide/configuring).

**Files**

By default, Frontwerk will look for and lint all the JS files in your root, recursively, ignoring whatever is passed in the ignore. In order to override this behavior, you can simple add the files as an argument to your lint task.

```json
{
  "scripts": {
    "lint": "frontwerk lint ./source/**/*.js"
  }
}
```

> Please note that if you do not have an `eslintignore` file, it is recommended that you pass a directory of files to lint, because your root also includes a `node_modules` folder that contains **quite a few** files. You want to avoid linting those.

**Cache**

By default, Frontwerk will use cache and store the info about processed files in order to only operate on the changed ones. You can of course override this behavior as well:

```json
{
  "scripts": {
    "lint": "frontwerk lint --no-cache"
  }
}
```

[eslint]: https://eslint.org/
[eslint-config-airbnb]: https://www.npmjs.com/package/eslint-config-airbnb
[eslint-config-airbnb-base]: https://www.npmjs.com/package/eslint-config-airbnb-base
[eslint-config-prettier]: https://www.npmjs.com/package/eslint-config-prettier
[eslint-plugin-prettier]: https://www.npmjs.com/package/eslint-plugin-prettier
[eslint-plugin-import]: https://www.npmjs.com/package/eslint-plugin-import
[eslint-plugin-react]: https://www.npmjs.com/package/eslint-plugin-react
[eslint-plugin-jsx-a11y]: https://www.npmjs.com/package/eslint-plugin-jsx-a11y
