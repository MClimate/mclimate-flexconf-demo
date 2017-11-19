import React from 'react';
import LoginButton from '../components/LoginButton';
import './main.css';


export default class Login extends React.Component {

  static isPrivate = false

  render() {
    return <div className="login">
    <div className="login-header"/>
      <div className="login-content">
        <h1>{' Login '}</h1>
        <LoginButton/>
      </div>
    </div>;
  }
}