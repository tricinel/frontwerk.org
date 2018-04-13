import React from 'react';

import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

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
      />
      <SkipNavigation
        id="skip-navigation"
        href="#main"
        title="Skip to main content"
      >
        Skip to main content
      </SkipNavigation>
      <Header metadata={siteMetadata} />
      <main id="#main">{children}</main>
    </div>
  </ThemeProvider>
);

export default SiteContentWrapper;
