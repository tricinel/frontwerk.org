import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { IMarkdownNode } from '../types';
import Layout from '../layouts/Documentation';

interface IProps {
  gettingStartedDoc: IMarkdownNode;
}

const DocsPage: React.SFC = (): JSX.Element => (
  <StaticQuery
    query={graphql`
      query docsQuery {
        gettingStartedDoc: markdownRemark(
          fields: { slug: { eq: "docs/introduction/" } }
        ) {
          html
        }
      }
    `}
    render={(data: IProps) => (
      <Layout>
        <main
          id="main"
          tabIndex={-1}
          aria-label="Main content"
          dangerouslySetInnerHTML={{ __html: data.gettingStartedDoc.html }}
        />
      </Layout>
    )}
  />
);

export default DocsPage;
