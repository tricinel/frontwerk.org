// @flow

import React from 'react';
import type { Node } from 'react';

import DocumentationWrapper from '../components/Layout/DocumentationWrapper';
import SiteContentWrapper from '../components/Layout/SiteContentWrapper';
import type { Metadata } from '../types';

import DocFragment from '../queries/Doc';
import SiteFragment from '../queries/Site';

type Props = {
  data: Metadata,
  children: Function
};

const TemplateWrapper = ({
  data: {
    site: { siteMetadata },
    allDocTitles: { edges }
  },
  children
}: Props): Node => (
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
