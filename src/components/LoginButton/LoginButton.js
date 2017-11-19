import React from 'react';
import {AUTH_URL, CLIENT_ID, REDIRECT_URI} from '../../constants/config';
import styles from './LoginButton.css';

const LoginButton = () => (
  <a className="btn" href={`${AUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`}>Login with MClimate</a>
);

LoginButton.propTypes = {

};

export default LoginButton;
