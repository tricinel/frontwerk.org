---
date: '2018-02-22'
title: 'Basics'
sectionTitle: 'Build'
section: 3
subsection: 1
---

# Building your code

Frontwerk will help you compile and build your app using one of the following:

* [BabelJS][babel]
* [RollupJS][rollup]
* [Webpack][webpack]

You are free to choose your build tool depending on what your project is. A good rule of thumb is to use:

1. **Babel** if you are trying to compile separate Javascript files written with next generation Javascript features, to run in older browsers.
2. **Webpack** if you are working on a Single Page Application.
3. **Rollup** if you want to ship a flat library, such as an utility.

## Choose your builder

**Babel (default)**

```json
{
  "scripts": {
    "build": "frontwerk build"
  }
}
```

Continue reading about [using babel][docs-babel].

**Rollup**

```json
{
  "scripts": {
    "build": "frontwerk build --bundle"
  }
}
```

Continue reading about [using rollup][docs-rollup].

**Webpack**

```json
{
  "scripts": {
    "build": "frontwerk build --pack"
  }
}
```

Continue reading about [using webpack][docs-webpack].

[babel]: https://babeljs.io/
[rollup]: https://rollupjs.org/
[webpack]: https://webpack.js.org/
[docs-babel]: /docs/babel
[docs-rollup]: /docs/rollup
[docs-webpack]: /docs/webpack
