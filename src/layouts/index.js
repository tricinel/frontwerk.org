import React from 'react';

import SiteContentWrapper from '../components/Layout/SiteContentWrapper';

import SiteFragment from '../queries/Site';

const TemplateWrapper = ({
  data: {
    site: { siteMetadata }
  },
  children
}) => (
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
