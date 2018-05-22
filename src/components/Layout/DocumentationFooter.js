// @flow

import React from 'react';
import styled from 'react-emotion';
import type { Node } from 'react';

import theme from '../../layouts/theme';

const Wrapper = styled('footer')`
  border-top: 1px solid ${theme.lightGray};
  font-size: 0.8rem;
  font-style: italic;
  margin: 30px 0;
`;

type Props = {
  children: Node
};

const DocumentationFooter = ({ children }: Props): Node => (
  <Wrapper>{children}</Wrapper>
);

export default DocumentationFooter;
