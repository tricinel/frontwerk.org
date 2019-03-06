import React from 'react';
import { Link } from 'gatsby';

import Logo from '../Logo';

import logo from '../../assets/logo-small.png';

interface IProps {
  title: string;
}

const SiteTitle: React.SFC<IProps> = ({ title }): JSX.Element => (
  <Link to="/">
    <Logo src={logo} alt={title} /> {title}
  </Link>
);

export default SiteTitle;
