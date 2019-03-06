import styled from '@emotion/styled';

import { List } from '../Layout/List';

const SidebarGroup = styled(List)`
  margin: 20px 0;

  :first-of-type {
    margin-top: 0;
  }

  :last-of-type {
    margin-bottom: 0;
  }
`;

export default SidebarGroup;
