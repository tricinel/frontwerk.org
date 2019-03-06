import React from 'react';

import { GithubIcon } from '../Logo';
import logo from '../../assets/GitHub-Mark-Light-64px.png';

interface IProps {
  link: string;
};

const GithubFork: React.SFC<IProps> = ({ link }): JSX.Element => (
  <a href={link} title="Github repo">
    <GithubIcon src={logo} alt="Github" />
  </a>
);

export default GithubFork;
