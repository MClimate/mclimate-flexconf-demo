import React from 'react'
import { AUTH_URL, CLIENT_ID, REDIRECT_URI } from '../../constants/config'
import './LoginButton.css'

const LoginButton = () => (
  <a className='btn' href={`${AUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`}><img src={require('./img/logo-btn.png')} alt='logo' /> Login with MClimate</a>
)

LoginButton.propTypes = {

}


export default LoginButton
