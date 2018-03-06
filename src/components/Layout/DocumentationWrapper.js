import React, { Component } from 'react';

import Grid from './Grid';
import SidebarContainer from '../Sidebar/SidebarContainer';
import MainContainer from './MainContainer';

import { breakpoints } from '../../layouts/theme';

class DocumentationWrapper extends Component {
  state = {
    showSidebar: false,
    showContent: true
  };

  componentWillMount() {
    this.updateStateWithWidth();
    window.addEventListener('resize', this.updateStateWithWidth);
  }

  updateStateWithWidth = () => {
    const w = window;
    const d = document;
    const b = d.getElementsByTagName('body')[0];

    const width =
      w.innerWidth || d.documentElement.clientWidth || b.clientWidth;

    this.setState({
      showSidebar: width > breakpoints.sm,
      showContent: true
    });
  };

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
