// @flow

import React from 'react';
import type { Node } from 'react';

import SiteContentWrapper from '../components/Layout/SiteContentWrapper';
import type { Metadata } from '../types';

import SiteFragment from '../queries/Site';

type Props = {
  data: Metadata,
  children: Function
};

const TemplateWrapper = ({
  data: {
    site: { siteMetadata }
  },
  children
}: Props): Node => (
  <SiteContentWrapper siteMetadata={siteMetadata}>
    {children()}
  </SiteContentWrapper>
);

export const query = graphql`
  query layoutsAboutQuery {
    site {
      ...SiteFragment
    }
  }
`;

export default TemplateWrapper;
