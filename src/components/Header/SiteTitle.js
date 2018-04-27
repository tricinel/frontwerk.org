// @flow

import React from 'react';
import Link from 'gatsby-link';
import type { Node } from 'react';

import Logo from '../Logo';

import logo from '../../../static/logo-small.png';

type Props = {
  title: string
};

const SiteTitle = ({ title }: Props): Node => (
  <Link to="/">
    <Logo src={logo} alt={title} /> {title}
  </Link>
);

export default SiteTitle;
