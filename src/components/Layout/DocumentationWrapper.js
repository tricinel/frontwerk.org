// @flow

import React, { Component } from 'react';
import type { Node } from 'react';
import type { Edge } from '../../types';

import Grid from './Grid';
import SidebarContainer from '../Sidebar/SidebarContainer';
import MainContainer from './MainContainer';

import { breakpoints } from '../../layouts/theme';

type Props = {
  docs: Edge,
  children: Node
};

type State = {
  showSidebar: boolean,
  showContent: boolean
};

class DocumentationWrapper extends Component<Props, State> {
  state = {
    showSidebar: false,
    showContent: true
  };

  componentDidMount() {
    const getWidth = () => {
      const w = window;
      const d = document;
      const b = d.getElementsByTagName('body')[0];

      // $FlowExpectedError
      return w.innerWidth || d.documentElement.clientWidth || b.clientWidth;
    };

    let width = getWidth();

    const updateStateWithWidth = w => {
      this.setState({
        showSidebar: w > breakpoints.sm,
        showContent: true
      });
    };

    updateStateWithWidth(width);
    window.addEventListener('resize', () => {
      if (width !== getWidth()) {
        width = getWidth();
        updateStateWithWidth(width);
      }
    });
  }

  handleToggle = () => {
    this.setState({
      showSidebar: !this.state.showSidebar,
      showContent: this.state.showSidebar
    });
  };

  render() {
    const { showSidebar, showContent } = this.state;

    return (
      <Grid template="1fr" templatemd="300px 1fr" gap={20}>
        <SidebarContainer
          edges={this.props.docs}
          showSidebar={showSidebar}
          onToggle={this.handleToggle}
        />
        <MainContainer style={{ display: showContent ? 'block' : 'none' }}>
          {this.props.children}
        </MainContainer>
      </Grid>
    );
  }
}

export default DocumentationWrapper;
