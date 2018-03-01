import React from 'react';

import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import theme from '../../layouts/theme';
import '../../layouts/index.css';

import Header from '../Header';

const SiteContentWrapper = ({ siteMetadata, children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title={siteMetadata.title}
        meta={[{ name: 'description', content: siteMetadata.description }]}
      />
      <Header metadata={siteMetadata} />
      {children}
    </div>
  </ThemeProvider>
);

export default SiteContentWrapper;
