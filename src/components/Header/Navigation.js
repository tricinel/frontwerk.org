// @flow

import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import type { Node } from 'react';

import { InlineList } from '../Layout/List';

import { breakpoints } from '../../layouts/theme';

const NavLinks = styled(InlineList)`
  text-align: right;

  @media screen and (min-width: ${breakpoints.sm}px) {
    text-align: center;
  }
`;

const Navigation = (): Node => (
  <nav id="main-navigation" aria-label="Top">
    <NavLinks>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/docs/">Docs</Link>
      </li>
    </NavLinks>
  </nav>
);

export default Navigation;
