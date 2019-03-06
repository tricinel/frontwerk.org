const { createFilePath } = require('gatsby-source-filesystem');

module.exports = async ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'docs' });

    createNodeField({
      node,
      name: 'slug',
      value: `docs${slug}`
    });
  }
};
