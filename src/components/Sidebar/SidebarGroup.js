import { List } from '../Layout/List';

const SidebarGroup = List.extend`
  margin: 20px 0;

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

export default SidebarGroup;
