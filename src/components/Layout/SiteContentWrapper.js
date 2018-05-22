import React from 'react';

import Helmet from 'react-helmet';
import { ThemeProvider } from 'emotion-theming';

import theme from '../../layouts/theme';
import '../../layouts/index.css';

import Header from '../Header';
import SkipNavigation from '../Header/SkipNavigation';

const SiteContentWrapper = ({ siteMetadata, children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title={siteMetadata.title}
        meta={[{ name: 'description', content: siteMetadata.description }]}
      >
        <html lang="en" />
      </Helmet>
      <SkipNavigation href="#main" title="Skip to main content">
        Skip to main content
      </SkipNavigation>
      <Header metadata={siteMetadata} />
      {children}
    </div>
  </ThemeProvider>
);

export default SiteContentWrapper;
