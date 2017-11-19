import React from 'react';
import LoginButton from '../components/LoginButton';
export default class Login extends React.Component {

  static isPrivate = false

  render() {
    return <div>
      <h1>{' Login '}</h1>
      <LoginButton/>
    </div>;
  }
}