import React, { Component } from 'react';
import prism from '../../utils/prism';

interface IProps {
  code: string;
  language: string;
}

interface IState {
  html: string;
}

class CodeView extends Component<IProps, IState> {
  public state = {
    html: ''
  };

  public componentWillMount() {
    const html = prism(this.props.code, this.props.language);
    this.setState({ html });
  }

  public componentWillReceiveProps({ code, language }: IProps) {
    if (code !== this.props.code || language !== this.props.language) {
      const html = prism(code, language);
      this.setState({ html });
    }
  }

  public render() {
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
