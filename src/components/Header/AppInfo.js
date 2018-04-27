// @flow

import React from 'react';
import type { Node } from 'react';

type Props = {
  version: string
};

const AppInfo = ({ version }: Props): Node => <span>v{version}</span>;

export default AppInfo;
