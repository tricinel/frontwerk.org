---
path: '/docs/troubleshooting'
date: '2018-03-07'
title: 'Troubleshooting'
sectionTitle: 'FAQ'
section: 4
subsection: 1
---

# Troubleshooting

I am trying to keep these docs up to date, but [the source code][github] is the ultimate source of truth. I will do my best to update this troubleshooting list with questions that arise.

## Linting my Javascript takes a long time to run

For the time being, you need to create an `eslintignore` file or property in your project, until [this issue](https://github.com/eslint/eslint/issues/9227) is resolved. Otherwise, ESLint will try to lint your `node_modules` as well.

[github]: https://github.com/tricinel/frontwerk
