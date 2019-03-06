import React from 'react';

interface IProps {
  version: string;
};

const AppInfo: React.SFC<IProps> = ({ version }): JSX.Element => <span>v{version}</span>;

export default AppInfo;
