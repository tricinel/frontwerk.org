import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import DocumentationWrapper from '../components/Layout/DocumentationWrapper';
import SiteContentWrapper from '../components/Layout/SiteContentWrapper';
import { IMetadata, IEdge } from '../types';

import './prism-theme.css';

interface IProps {
  site: {
    siteMetadata: IMetadata;
  };
  allDocTitles: {
    edges: IEdge[];
  };
}

const Layout: React.SFC = ({ children }): JSX.Element => (
  <StaticQuery
    query={graphql`
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
    `}
    render={(data: IProps) => (
      <SiteContentWrapper siteMetadata={data.site.siteMetadata}>
        <DocumentationWrapper docs={data.allDocTitles.edges}>
          {children}
        </DocumentationWrapper>
      </SiteContentWrapper>
    )}
  />
);

export default Layout;
