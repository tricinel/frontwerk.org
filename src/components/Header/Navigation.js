import React from 'react';
import Link from 'gatsby-link';

import { InlineList } from '../Layout/List';

const Navigation = () => (
  <InlineList>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/docs/">Docs</Link>
    </li>
  </InlineList>
);

export default Navigation;
