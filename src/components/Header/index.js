import React from 'react';
import styled from 'styled-components';

import SiteTitle from './SiteTitle';
import Navigation from './Navigation';
import AppInfo from './AppInfo';
import GithubFork from './GithubFork';

import { InlineList } from '../Layout/List';

import { breakpoints } from '../../layouts/theme';

const HeaderContainer = styled.header`
  align-items: center;
  background-color: ${props => props.theme.primary};
  color: #fff;
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: 1fr 1fr;
  height: 60px;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;

  a,
  span {
    color: #fff;
    text-align: center;
  }

  a {
    text-decoration: none;

    :hover {
      color: ${props => props.theme.accent};
    }
  }

  @media screen and (min-width: ${breakpoints.sm}px) {
    grid-template-columns: 1fr auto 1fr;
  }
`;

const RightInlineList = InlineList.extend`
  display: none;
  text-align: center;

  @media screen and (min-width: ${breakpoints.sm}px) {
    display: inline-block;
  }
`;

const Header = ({ metadata }) => (
  <HeaderContainer>
    <SiteTitle title={metadata.title} />
    <Navigation />
    <RightInlineList>
      <li>
        <AppInfo version={metadata.appVersion} />
      </li>
      <li>
        <GithubFork link={metadata.githubUrl} />
      </li>
    </RightInlineList>
  </HeaderContainer>
);

export default Header;
