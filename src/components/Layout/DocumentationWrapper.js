import React from 'react';

import Grid from './Grid';
import Sidebar from '../Sidebar';
import MainContainer from './MainContainer';

const DocumentationWrapper = ({ docs, children }) => (
  <Grid template="300px 1fr" gap={20}>
    <Sidebar edges={docs} />
    <MainContainer>{children}</MainContainer>
  </Grid>
);

export default DocumentationWrapper;
