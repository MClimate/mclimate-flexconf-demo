import React from 'react';

export default class Home extends React.Component {

  static isPrivate = true;

  render() {
    return <div>
        <h1>{' Error '}</h1>
        <h2>{this.props.error}</h2>
        <p>{this.props.desc}</p>
      </div>;
  }
}