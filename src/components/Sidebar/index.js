import React from 'react';
import Link from 'gatsby-link';

import SidebarContainer from '../Layout/SidebarContainer';
import SidebarSectionTitle from './SidebarSectionTitle';
import SidebarGroup from './SidebarGroup';

const DocLink = ({ doc: { frontmatter: { path, title } } }) => (
  <li>
    <Link to={path}>{title}</Link>
  </li>
);

const getDocsList = edges =>
  edges.map(({ node }) => <DocLink key={node.id} doc={node} />);
const parseDocsList = groups => {
  const html = [];
  Object.keys(groups).forEach(sectionTitle => {
    html.push(
      <SidebarGroup>
        <SidebarSectionTitle>{sectionTitle}</SidebarSectionTitle>
        {getDocsList(groups[sectionTitle])}
      </SidebarGroup>
    );
  });
  return html;
};

const getGroupedDocsList = edges =>
  edges.reduce((groups, edge) => {
    const { sectionTitle } = edge.node.frontmatter;

    if (!groups[sectionTitle]) {
      groups[sectionTitle] = [];
    }

    groups[sectionTitle].push(edge);

    return groups;
  }, {});

const Sidebar = ({ edges }) => (
  <SidebarContainer>
    {parseDocsList(getGroupedDocsList(edges))}
  </SidebarContainer>
);

export default Sidebar;
