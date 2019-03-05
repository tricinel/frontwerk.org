module.exports = async ({ page, actions: { createPage } }) =>
  new Promise((resolve, _reject) => {
    if (page.path.match(/^\/docs/)) {
      page.layout = 'documentation';

      createPage(page);
    }

    resolve();
  });
