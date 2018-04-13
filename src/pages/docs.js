import React from 'react';

const DocsPage = ({
  data: {
    gettingStartedDoc: { html }
  }
}) => (
  <main
    id="main"
    tabIndex="-1"
    aria-label="Main content"
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

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
