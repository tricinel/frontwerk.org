---
date: '2018-06-28'
title: 'Troubleshooting'
sectionTitle: 'FAQ'
section: 4
subsection: 1
---

# Troubleshooting

I am trying to keep these docs up to date, but [the source code][github] is the ultimate source of truth. I will do my best to update this troubleshooting list with questions that arise.

## Linting my Javascript takes a long time to run

For the time being, you need to create an `eslintignore` file or property in your project, until [this issue](https://github.com/eslint/eslint/issues/9227) is resolved. Otherwise, ESLint will try to lint your `node_modules` as well.

## My editor doesn't correctly show lint errors inline

Both VSCode or SublimeText will look for an eslint config file in the root directory of your project and the walk the tree upwards until they get to your home directory. They will use the first eslint config file they find and error out if they don't find one (VSCode will use its internal config as well).

If you run your lint task with frontwerk in the terminal, the correct eslint config is picked up (i.e. the default one used by frontwerk). But your editor cannot run frontwerk, so you will see different errors in that environment.

In order to allow your editor to pick up the correct eslint config, you need to create an `.eslintrc` file in your project root with just the extends property:

```json
{
  "extends": "./node_modules/frontwerk/eslint.js"
}
```

The same rule applies for prettier.

```javascript
// prettier.config.js
const prettierConfig = require('frontwerk/prettier');

module.exports = Object.assign(prettierConfig, {});
```

[github]: https://github.com/tricinel/frontwerk
