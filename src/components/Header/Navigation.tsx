import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { InlineList } from '../Layout/List';

import { breakpoints } from '../../layouts/theme';

const NavLinks = styled(InlineList)`
  text-align: right;

  @media screen and (min-width: ${breakpoints.sm}px) {
    text-align: center;
  }
`;

const Navigation: React.SFC = (): JSX.Element => (
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
