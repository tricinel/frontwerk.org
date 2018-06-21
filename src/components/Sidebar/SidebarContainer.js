// @flow

import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import type { Node } from 'react';

import SidebarSectionTitle from './SidebarSectionTitle';
import SidebarGroup from './SidebarGroup';
import SidebarToggle from './SidebarToggle';
import SkipNavigation from '../Header/SkipNavigation';
import type { Edge, MarkdownNode } from '../../types';

import theme from '../../layouts/theme';
import formatSlug from '../../utils/formatSlug';

type DocLinkProps = {
  doc: MarkdownNode
};

const DocLink = ({
  doc: {
    fields: { slug },
    frontmatter: { title }
  }
}: DocLinkProps): Node => (
  <li>
    <Link to={formatSlug(slug)}>{title}</Link>
  </li>
);

const getDocsList = (edges: Array<Edge>): Array<Node> =>
  edges.map(({ node }) => <DocLink key={node.fields.slug} doc={node} />);

const parseDocsList = (groups: Object): Array<Node> => {
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

const getGroupedDocsList = (edges: Array<Edge>): Object =>
  edges.reduce((groups, edge) => {
    const { sectionTitle } = edge.node.frontmatter;

    if (!groups[sectionTitle]) {
      groups[sectionTitle] = [];
    }

    groups[sectionTitle].push(edge);

    return groups;
  }, {});

const StyledContainer = styled('aside')`
  background-color: ${theme.sidebarBg};
  box-shadow: inset -1px 0 2px rgba(0, 0, 0, 0.2);
  min-height: calc(100vh - 60px);
  height: 100%;
  padding: 40px 20px;
`;

type SidebarContainerProps = {
  edges: Array<Edge>,
  showSidebar: boolean,
  onToggle: Function
};

const SidebarContainer = ({
  edges,
  showSidebar,
  onToggle
}: SidebarContainerProps): Node => (
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
