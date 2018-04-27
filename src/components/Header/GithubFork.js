// @flow

import React from 'react';
import type { Node } from 'react';

import { GithubIcon } from '../Logo';
import logo from '../../../static/GitHub-Mark-Light-64px.png';

type Props = {
  link: string
};

const GithubFork = ({ link }: Props): Node => (
  <a href={link} title="Github repo">
    <GithubIcon src={logo} alt="Github" />
  </a>
);

export default GithubFork;
