module.exports = async ({ page, boundActionCreators: { createPage } }) =>
  new Promise((resolve, _reject) => {
    if (page.path.match(/^\/docs/)) {
      page.layout = 'documentation';

      createPage(page);
    }

    resolve();
  });
