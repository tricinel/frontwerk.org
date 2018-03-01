import React from 'react';
import Link from 'gatsby-link';

import Logo from '../Logo';

import logo from '../../assets/logo-small.png';

const SiteTitle = ({ title }) => (
  <Link to="/">
    <Logo src={logo} alt={title} /> {title}
  </Link>
);

export default SiteTitle;
