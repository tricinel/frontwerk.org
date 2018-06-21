const path = require('path');

module.exports = async ({ boundActionCreators: { createPage }, graphql }) =>
  new Promise((resolve, reject) => {
    const pageTemplate = path.resolve('src/templates/doc.js');

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 100) {
              edges {
                node {
                  frontmatter {
                    path
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
            path: node.frontmatter.path,
            component: pageTemplate
          });
        });
      })
    );
  });
