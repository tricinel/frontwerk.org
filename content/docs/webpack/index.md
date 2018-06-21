---
date: '2018-02-23'
title: 'Webpack'
sectionTitle: 'Build'
section: 3
subsection: 3
---

# Build your SPA with Webpack

Frontwerk uses [Webpack][webpack] under the hood to bundle your Javascript application.

## Default configuration

You can run the following command and have Webpack bundle your javascript.

```bash
frontwerk build --pack
```

> The above command assumes you have structured your project to have a `src` folder where your Javascript lives and a `dist` folder where the compiled versions will be written to. Furthermore, your entry point is a `src/index.js` or `src/index.jsx` (if using React) file.

By default, Webpack will use the configuration based on the `--mode` flag passed via the CLI (either `developmet` or `production`). You can browse the source code to see the [configuration][frontwerk-webpack-configuration] and the [plugins][frontwerk-webpack-plugins] used.

## Overriding the defaults

There are two possible ways to extend or create your Webpack config.

1. Create a file named `webpack.config.js` in your project root.
2. Pass a `--config` argument with your build task.

If you don't know how to create a `webpack.config.js` file, please have a read on the [Webpack][webpack-config] website.

Because Frontwerk's default `webpack.config.js` exports a configuration object, you can extend it in your own config file.

```javascript
const { webpack: webpackConfig } = require('frontwerk/config');
module.exports = Object.assign(webpackConfig, {
  // your overrides here
});
```

**Entry point**

Frontwerk assumes your entry point is `src/index.js(x)`. You can override this by passing the `--entry` flag.

```bash
frontwerk build --pack --entry source/main.js
```

**Destination directory**

Frontwerk assumes your destination directory is `dist`. You can override this by passing the `--output-path` flag.

```bash
frontwerk build --pack --output-path [folder]
```

**CLI options**

There are a couple of other sensible defaults that you can override:

* `--watch` will watch the files for changes and rebundle as needed
* `--no-clean` will not clean the `dist` directory before bundling
* `--mode` will set the correct environment. Either `development` or `production`

[Next up: Building with Rollup][rollup]

[webpack]: https://webpack.js.org/
[webpack-config]: https://webpack.js.org/concepts/configuration/
[rollup]: /docs/rollup
[frontwerk-webpack-configuration]: https://github.com/tricinel/frontwerk/blob/master/src/config/webpack.config.js
[frontwerk-webpack-plugins]: https://github.com/tricinel/frontwerk/blob/master/src/config/webpack.utils.js
