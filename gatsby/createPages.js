const path = require('path');

module.exports = async ({ actions: { createPage }, graphql }) =>
  new Promise((resolve, reject) => {
    const pageTemplate = path.resolve('src/templates/doc.tsx');

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 100) {
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: pageTemplate,
            context: {
              slug: node.fields.slug
            }
          });
          // const page = {
          //   path: node.fields.slug,
          //   component: pageTemplate,
          //   context: {
          //     slug: node.fields.slug
          //   }
          // };

          // if (node.fields.slug.match(/^\/docs/)) {
          //   page.layout = 'documentation';
          // }

          // createPage(page);
        });
      })
    );
  });
