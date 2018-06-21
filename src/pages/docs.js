// @flow

import React from 'react';
import type { Node } from 'react';

import type { MarkdownNode } from '../types';

type Props = {
  data: {
    gettingStartedDoc: MarkdownNode
  }
};

const DocsPage = ({
  data: {
    gettingStartedDoc: { html }
  }
}: Props): Node => (
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
      fields: { slug: { eq: "docs/introduction/" } }
    ) {
      html
    }
  }
`;
