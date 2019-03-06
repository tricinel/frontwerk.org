import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import SidebarSectionTitle from './SidebarSectionTitle';
import SidebarGroup from './SidebarGroup';
import SidebarToggle from './SidebarToggle';
import SkipNavigation from '../Header/SkipNavigation';
import { IEdge, IMarkdownNode } from '../../types';

import theme from '../../layouts/theme';
import formatSlug from '../../utils/formatSlug';

interface IDocLinkProps {
  doc: IMarkdownNode;
};

const DocLink = ({
  doc: {
    fields: { slug },
    frontmatter: { title }
  }
}: IDocLinkProps): JSX.Element => (
  <li>
    <Link to={formatSlug(slug)}>{title}</Link>
  </li>
);

const getDocsList = (edges: IEdge[]): JSX.Element[] =>
  edges.map(({ node }) => <DocLink key={node.fields.slug} doc={node} />);

const parseDocsList = (groups: any): JSX.Element[] => {
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

const getGroupedDocsList = (edges: IEdge[]): any =>
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

interface ISidebarContainerProps {
  edges: IEdge[];
  showSidebar: boolean;
  onToggle: () => void
};

const SidebarContainer = ({
  edges,
  showSidebar,
  onToggle
}: ISidebarContainerProps): JSX.Element => (
  <div>
    <SidebarToggle isOpen={showSidebar} onPress={onToggle} />
    <StyledContainer
      style={{ display: showSidebar ? 'block' : 'none' }}
      aria-label="Sidebar navigation"
    >
      <SkipNavigation href="#main" title="Skip to main content">
        Skip to main content
      </SkipNavigation>
      <nav id="documentation-navigation" aria-label="Documentation">
        {parseDocsList(getGroupedDocsList(edges))}
      </nav>
    </StyledContainer>
  </div>
);

export default SidebarContainer;
