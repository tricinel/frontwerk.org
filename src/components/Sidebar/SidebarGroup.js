import styled from 'react-emotion';

import { List } from '../Layout/List';

const SidebarGroup = styled(List)`
  margin: 20px 0;

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

export default SidebarGroup;
