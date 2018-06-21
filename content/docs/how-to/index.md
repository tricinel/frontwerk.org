---
date: '2018-03-07'
title: 'How to'
sectionTitle: 'FAQ'
section: 4
subsection: 2
---

# How do I...

If you can't be bothered to read the docs or the source code for the tool you want to use in Frontwerk, and instead just want some quick answers, then read on...

## How do I add my own plugins to Rollup?

Frontwerk's default `rollup.config.js` exports a configuration object that you can extend. First, create a `rollup.config.js` file in the root of your project, then import and extend the plugins that Frontwerk provides for rollup with your own.

```javascript
const { rollup: rollupConfig } = require('frontwerk/config');
const flow = require('rollup-plugin-flow');

const plugins = [flow({ pretty: true }), ...rollupConfig.plugins];

module.exports = Object.assign(rollupConfig, {
  plugins
});
```

> Be sure to install the plugins you want to add, e.g. `yarn add --dev rollup-plugin-flow`.

[github]: https://github.com/tricinel/frontwerk
