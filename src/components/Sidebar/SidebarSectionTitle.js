import styled from 'react-emotion';

import theme, { typography } from '../../layouts/theme';

const SidebarSectionTitle = styled('li')`
  color: ${theme.banner};
  font-size: calc(${typography.baseFontSize} * 0.8);
  margin-bottom: 20px !important;
  margin-top: 20px !important;
  text-transform: uppercase;
`;

export default SidebarSectionTitle;
