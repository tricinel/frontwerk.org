import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import SidebarSectionTitle from './SidebarSectionTitle';
import SidebarGroup from './SidebarGroup';
import SidebarToggle from './SidebarToggle';

import theme from '../../layouts/theme';

const DocLink = ({
  doc: {
    frontmatter: { path, title }
  }
}) => (
  <li>
    <Link to={path}>{title}</Link>
  </li>
);

const getDocsList = edges =>
  edges.map(({ node }) => <DocLink key={node.frontmatter.path} doc={node} />);

const parseDocsList = groups => {
  const html = [];
  Object.keys(groups).forEach(sectionTitle => {
    html.push(
      <SidebarGroup key={sectionTitle}>
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

const StyledContainer = styled.aside`
  background-color: ${theme.sidebarBg};
  box-shadow: inset -1px 0 2px rgba(0, 0, 0, 0.2);
  min-height: calc(100vh - 60px);
  height: 100%;
  padding: 40px 20px;
`;

const SidebarContainer = ({ edges, showSidebar, onToggle }) => (
  <div>
    <SidebarToggle isOpen={showSidebar} onPress={onToggle} />
    <StyledContainer style={{ display: showSidebar ? 'block' : 'none' }}>
      {parseDocsList(getGroupedDocsList(edges))}
    </StyledContainer>
  </div>
);

export default SidebarContainer;
