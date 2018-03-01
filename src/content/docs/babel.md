---
path: '/docs/babel'
date: '2018-02-22'
title: 'BabelJS'
sectionTitle: 'Build'
section: 3
subsection: 2
---

# Compile your Javascript code with BabelJS

Frontwerk uses [BabelJS][babel] under the hood to compile your Javascript so that you can write next generation Javascript and not worry about browser support.

## Default configuration

You can run the following command and have BabelJS compile your Javascript.

```bash
frontwerk build
```

> The above command assumes you have structured your project to have a `src` folder where your Javascript lives and a `dist` folder where the compiled versions will be written to.

By default, BabelJS will use the following configuration:

```javascript
module.exports = {
  presets: [
    [
      'env',
      {
        targets: {
          browsers: ['last 2 version', 'ie 10', 'ie 11']
        }
      }
    ],
    'react', // if you have React as a dependency
    'flow' // if you have flow as a dependency
  ],
  plugins: ['transform-object-rest-spread', 'minify-dead-code-elimination']
};
```

## Overriding the defaults

There are three possible ways to extend or create your BabelJS config.

1. Create a file named `.babelrc` in your project root.
2. Have an `babel` property in your `package.json`.
3. Pass a `--presets` argument with your build task.

Either having a file named `.babelrc` and having a `babel` property in your `package.json` will mean the default configuration that ships with Frontwerk will be replaced.

Passing a `--presets` option, will combine your presets with the default presets and keep the others as the default.

If you don't know how to create a `.babelrc` file, please have a read on the [BabelJS][babelrc] website.

**Ignore**

You can have certain files be ignored by BabelJS. By default, files inside the following folders are ignored: `__tests__`, `__mocks__`.

You can override this default by passing an `--ignore` flag with your build command.

```bash
frontwerk build --ignore folder
```

**Files to compile**

Frontwerk assumes it will compile everything in the `src` directory. You can override this by passing the individual files to compile.

```bash
frontwerk build files
```

**Destination directory**

Frontwerk assumes your destination directory is `dist`. You can override this by passing the `--out-dir` flag.

```bash
frontwerk build --out-dir folder
```

**CLI options**

There are a couple of other sensible defaults that you can override:

* `--no-copy-files` will not copy files that will not be compiled
* `--no-clean` will not clean the `dist` directory before compiling

[babel]: https://babeljs.io/
[babelrc]: https://babeljs.io/docs/usage/babelrc
