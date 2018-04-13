import React from 'react';

import DocumentationWrapper from '../components/Layout/DocumentationWrapper';
import SiteContentWrapper from '../components/Layout/SiteContentWrapper';

import DocFragment from '../queries/Doc';
import SiteFragment from '../queries/Site';

const TemplateWrapper = ({
  data: {
    site: { siteMetadata },
    allDocTitles: { edges }
  },
  children
}) => (
  <SiteContentWrapper siteMetadata={siteMetadata}>
    <DocumentationWrapper docs={edges}>{children()}</DocumentationWrapper>
  </SiteContentWrapper>
);

export default TemplateWrapper;

export const pageQuery = graphql`
  query documentation {
    site {
      ...SiteFragment
    }
    allDocTitles: allMarkdownRemark(
      sort: {
        order: ASC
        fields: [frontmatter___section, frontmatter___subsection]
      }
    ) {
      edges {
        node {
          ...DocFragment
        }
      }
    }
  }
`;
