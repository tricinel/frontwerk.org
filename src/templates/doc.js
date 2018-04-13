// @flow

import React from 'react';
import type { Node } from 'react';

import DocumentationWrapper from '../components/Layout/DocumentationWrapper';
import DocumentationFooter from '../components/Layout/DocumentationFooter';
import type { MarkdownNode, Edge } from '../types';

import DocFragment from '../queries/Doc';

type Props = {
  data: {
    allDocTitles: {
      edges: Array<Edge>
    },
    docByPath: MarkdownNode
  }
};

const Template = ({
  data: {
    allDocTitles: { edges },
    docByPath: { frontmatter, html }
  }
}: Props): Node => (
  <DocumentationWrapper docs={edges}>
    <main
      id="main"
      tabIndex="-1"
      aria-label="Main content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
    <DocumentationFooter>
      <p>Last updated: {frontmatter.date}</p>
    </DocumentationFooter>
  </DocumentationWrapper>
);

export default Template;

export const pageQuery = graphql`
  query docByPath($path: String!) {
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
    docByPath: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
