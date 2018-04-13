import React from 'react';

import { GithubIcon } from '../Logo';
import logo from '../../../static/GitHub-Mark-Light-64px.png';

const GithubFork = ({ link }) => (
  <a href={link} title="Github repo">
    <GithubIcon src={logo} alt="Github" />
  </a>
);

export default GithubFork;
