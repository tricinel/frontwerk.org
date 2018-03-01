import styled from 'styled-components';

import theme from '../../layouts/theme';

const SidebarContainer = styled.aside`
  background-color: ${theme.sidebarBg};
  box-shadow: inset -1px 0 2px rgba(0, 0, 0, 0.2);
  min-height: calc(100vh - 60px);
  padding: 40px 20px;
`;

export default SidebarContainer;
