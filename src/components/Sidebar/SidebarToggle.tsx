import React from 'react';
import styled from '@emotion/styled';

import MenuIcon from './MenuIcon';
import CloseIcon from './CloseIcon';

import theme, { breakpoints } from '../../layouts/theme';

const Button = styled.button`
  background-color: ${theme.primary};
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  border: 0;
  color: #fff;
  cursor: pointer;
  display: block;
  opacity: 0.8;
  padding: 6px 10px 2px 10px;
  position: fixed;
  top: 80px;

  &:hover {
    opacity: 1;
  }

  @media screen and (min-width: ${breakpoints.sm}px) {
    display: none;
  }
`;

interface IProps {
  isOpen: boolean;
  onPress: () => void;
};

const SidebarToggle: React.SFC<IProps> = ({ isOpen, onPress }): JSX.Element => (
  <Button onClick={onPress} aria-label="Toggle sidebar">
    {!isOpen && <MenuIcon />}
    {isOpen && <CloseIcon />}
  </Button>
);

export default SidebarToggle;
