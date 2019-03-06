import React from 'react';
import styled from '@emotion/styled';

import theme from '../../layouts/theme';

const Wrapper = styled.footer`
  border-top: 1px solid ${theme.lightGray};
  font-size: 0.8rem;
  font-style: italic;
  margin: 30px 0;
`;

const DocumentationFooter: React.SFC = ({ children }): JSX.Element => (
  <Wrapper>{children}</Wrapper>
);

export default DocumentationFooter;
