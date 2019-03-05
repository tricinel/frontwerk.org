import React from 'react';

interface IProps {
  size?: number;
};

const MenuIcon: React.SFC<IProps> = ({ size = 20 }): JSX.Element => (
  <svg
    viewBox="0 0 249 249"
    version="1.1"
    x="0px"
    y="0px"
    width={size}
    height={size}
    aria-labelledby="svgtitle-open-menu"
  >
    <title id="svgtitle-open-menu">Open menu</title>
    <g transform="translate(-140.000000, -89.000000)">
      <path
        d="
          M389,138.8 L140,138.8 L140,89 L389,89 L389,138.8 L389,138.8 Z M389,238.4 L140,238.4 L140,188.6 L389,188.6 L389,238.4 L389,238.4 Z M314.3,338 L140,338 L140,288.2 L314.3,288.2 L314.3,338 L314.3,338 Z
        "
        fill="currentColor"
      />
    </g>
  </svg>
);

MenuIcon.defaultProps = {
  size: 20
};

export default MenuIcon;
