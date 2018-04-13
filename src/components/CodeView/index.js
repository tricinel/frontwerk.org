// @flow

import React, { Component } from 'react';

import prism from '../../utils/prism';

type Props = {
  code: string,
  language: string
};

type State = {
  html: string
};

class CodeView extends Component<Props, State> {
  state = {
    html: ''
  };

  componentWillMount() {
    const html = prism(this.props.code, this.props.language);
    this.setState({ html });
  }

  componentWillReceiveProps({ code, language }: Props) {
    if (code !== this.props.code || language !== this.props.language) {
      const html = prism(code, language);
      this.setState({ html });
    }
  }

  render() {
    const { html } = this.state;
    const { language } = this.props;

    return (
      <div className="gatsby-highlight">
        <pre className={`language-${language}`}>
          <code dangerouslySetInnerHTML={{ __html: html }} />
        </pre>
      </div>
    );
  }
}

export default CodeView;
