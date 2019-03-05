import React from 'react';
import { graphql } from 'gatsby';

import DocumentationWrapper from '../components/Layout/DocumentationWrapper';
import DocumentationFooter from '../components/Layout/DocumentationFooter';
import { IMarkdownNode, IEdge } from '../types';
import Layout from '../layouts/Layout';

interface IProps {
  data: {
    allDocTitles: {
      edges: IEdge[];
    };
    docByPath: IMarkdownNode;
  };
}

const Template: React.SFC<IProps> = ({
  data: {
    allDocTitles: { edges },
    docByPath: { frontmatter, html }
  }
}): JSX.Element => (
  <Layout>
    <DocumentationWrapper docs={edges}>
      <main
        id="main"
        tabIndex={-1}
        aria-label="Main content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <DocumentationFooter>
        <p>Last updated: {frontmatter.date}</p>
      </DocumentationFooter>
    </DocumentationWrapper>
  </Layout>
);

export default Template;

export const pageQuery = graphql`
  query docByPath($slug: String!) {
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
    docByPath: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
