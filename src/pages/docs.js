import React from 'react';

const DocsPage = ({
  data: {
    gettingStartedDoc: { html }
  }
}) => <section dangerouslySetInnerHTML={{ __html: html }} />;

export default DocsPage;

export const pageQuery = graphql`
  query docsQuery {
    gettingStartedDoc: markdownRemark(
      frontmatter: { path: { eq: "/docs/introduction" } }
    ) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
