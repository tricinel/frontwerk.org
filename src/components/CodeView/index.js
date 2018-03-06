import React, { Component } from 'react';

import prism from '../../utils/prism';

class CodeView extends Component {
  state = {
    html: ''
  };

  componentWillMount() {
    const html = prism(this.props.code, this.props.language);
    this.setState({ html });
  }

  componentWillReceiveProps({ code, language }) {
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
