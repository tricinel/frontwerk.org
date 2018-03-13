---
path: '/docs/rollup'
date: '2018-02-22'
title: 'Rollup'
sectionTitle: 'Build'
section: 3
subsection: 4
---

# Bundle your library with Rollup

Frontwerk uses [RollupJS][rollup] under the hood to bundle multiple Javascript files into a final output, such as a library.

## Default configuration

You can run the following command and have Rollup bundle your Javascript.

```bash
frontwerk build --bundle
```

> The above command assumes you have structured your project to have a `src` folder where your Javascript lives and a `dist` folder where the compiled versions will be written to. Furthermore, your entry point is a `src/index.js` file.

By default, Rollup will use the following configuration and output multiple files: `esm`, `cjs`, `umd`, `umd.min`.

```javascript
module.exports = {
  input: 'src/index.js',
  output: {
    filepath: 'dist',
    format: 'es', // or any of the formats above
    name: 'MyApp', // the name property from your package.json capitalised and camelcased
    external: {}, // your package's peerDependencies
    globals: {}, // your package's peerDependencies capitalised and camelcased
    plugins: [
      nodeResolve({ preferBuiltins: false, jsnext: true, main: true }),
      commonjs({ include: 'node_modules/**' }),
      json(),
      rollupBabel({
        exclude: 'node_modules/**',
        presets: [], // if you are also using the default .babelrc config
        babelrc: true
      })
    ]
  }
};
```

## Overriding the defaults

There are two possible ways to create your own Rollup config.

1. Create a file named `rollup.config.js` in your project root.
2. Pass a `--config` argument with your build task.

If you don't know how to create a `rollup.config.js` file, please have a read on the [RollupJS][rollup-config] website.

Because Frontwerk's default `rollup.config.js` exports a configuration object, you can extend it in your own config file.

```javascript
const { rollup: rollupConfig } = require('frontwerk/config');
module.exports = Object.assign(rollupConfig, {
  // your overrides here
});
```

**CLI options**

There are a couple of other sensible defaults that you can override:

* `--watch` will watch the files for changes and rebundle as needed
* `--no-clean` will not clean the `dist` directory before bundling

[rollup]: https://rollupjs.org
[rollup-config]: https://rollupjs.org/guide/en#using-config-files
