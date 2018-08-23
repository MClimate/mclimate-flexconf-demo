//Usage
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from './router/AuthRoute';

import Login from './scenes/Login';
import Home from './scenes/Home';
import CallbackURI from './scenes/CallbackURI';

export default () => 
  <Router>
    <Switch>
      <Route component={ Login } path="/login" />
      <Route component={ CallbackURI } path="/callback" />
      <Route component={ Home } path="/home" />
      <Route component={ Login } path="/" />
    </Switch>
  </Router>;