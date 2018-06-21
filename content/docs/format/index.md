---
date: '2018-02-20'
title: 'Formatting'
sectionTitle: 'Tooling'
section: 2
subsection: 4
---

# Formatting with Prettier

Frontwerk uses [Prettier][prettier] under the hood to format your code.

## Default configuration

You can run the following command and have Prettier format your files.

```bash
frontwerk format
```

> The above command will format every `js`, `json`, `less`, `css`, `ts` and `md` in your root, recursively, ignoring any files inside of the following folders: `node_modules`, `coverage`, `dist` and `.tmp/build`.

By default, Frontwerk will use the following prettier rules:

```json
{
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: "none",
  bracketSpacing: true,
  jsxBracketSameLine: false
}
```

## Overriding the defaults

Frontwerk follows Prettier's way of creating configuration and ignore files.

**Config**

There are three possible ways to extend or create your prettier config.

1. Create a file named `.prettierrc` or `prettier.config.js` in your project root.
2. Have an `prettierrc` property in your `package.json`.
3. Pass a `--config` argument with your format task.

You can override the default config by creating an `prettier.config.js` or
`.prettierrc` file.

```json
{
  printWidth: 100,
  tabWidth: 4,
  useTabs: true,
  semi: true,
  singleQuote: true,
  trailingComma: "none",
  bracketSpacing: true,
  jsxBracketSameLine: true
}
```

You can also add a property `prettierrc` to your `package.json` and extend or replace the defaults there.

```json
{
  "prettierrc": {
    printWidth: 100,
    tabWidth: 4,
    useTabs: true,
    semi: true,
    singleQuote: true,
    trailingComma: "none",
    bracketSpacing: true,
    jsxBracketSameLine: true
  }
}
```

Another way to do it is by passing a `--config` flag to your `frontwerk format` task with a path to a file to use as a configuration file.

```json
{
  "scripts": {
    "format": "frontwerk format --config ./myconfig.js"
  }
}
```

**Ignore**

There are two possible ways to create your own prettier ignore.

1. Create a file named `.prettierignore` in your project root.
2. Pass a `--ignore-path` argument with your format task.

**Files**

By default, Frontwerk will look for and prettify all files with the following extensions: `js`, `json`, `less`, `css`, `ts` and `md` in your root, recursively, ignoring whatever is passed in the ignore. In order to override this behavior, you can simple add the files as an argument to your format task.

```json
{
  "scripts": {
    "format": "frontwerk format ./source/**/*.js"
  }
}
```

**Write**

By default, Frontwerk will write the prettified files. You can of course
override this behavior as well:

```json
{
  "scripts": {
    "format": "frontwerk format --no-write"
  }
}
```

[Next up: Bundling your code][build-basics]

[prettier]: https://prettier.io/
[build-basics]: /docs/build