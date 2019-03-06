import React, { Component } from 'react';
import { IEdge } from '../../types';

import Grid from './Grid';
import SidebarContainer from '../Sidebar/SidebarContainer';
import MainContainer from './MainContainer';

import { breakpoints } from '../../layouts/theme';

interface IProps {
  docs: IEdge[];
}

interface IState {
  showSidebar: boolean;
  showContent: boolean;
}

class DocumentationWrapper extends Component<IProps, IState> {
  public state = {
    showSidebar: false,
    showContent: true
  };

  public componentDidMount() {
    const getWidth = () => {
      const w = window;
      const d = document;
      const b = d.getElementsByTagName('body')[0];

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

  public handleToggle = () => {
    this.setState({
      showSidebar: !this.state.showSidebar,
      showContent: this.state.showSidebar
    });
  };

  public render() {
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
