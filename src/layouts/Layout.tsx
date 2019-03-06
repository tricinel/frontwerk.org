import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import SiteContentWrapper from '../components/Layout/SiteContentWrapper';
import { IMetadata } from '../types';

import './prism-theme.css';

interface IProps {
  site: {
    siteMetadata: IMetadata;
  };
}

const Layout: React.SFC = ({ children }): JSX.Element => (
  <StaticQuery
    query={graphql`
      query layoutsAboutQuery {
        site {
          ...SiteFragment
        }
      }
    `}
    render={(data: IProps) => (
      <SiteContentWrapper siteMetadata={data.site.siteMetadata}>
        {children}
      </SiteContentWrapper>
    )}
  />
);

export default Layout;
