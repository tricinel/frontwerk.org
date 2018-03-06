import React from 'react';

import { GithubIcon } from '../Logo';
import logo from '../../assets/GitHub-Mark-Light-64px.png';

const GithubFork = ({ link }) => (
  <a href={link}>
    <GithubIcon src={logo} alt="Github" />
  </a>
);

export default GithubFork;
