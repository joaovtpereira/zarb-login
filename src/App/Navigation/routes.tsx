import React from 'react';
import { Router, Switch, Route } from 'react-router'

import Login from '../Containers/Login';
import Dashboard from '../Containers/Dashboard';
import SignUp from '../Containers/SignUp';
import ForgotPassword from '../Containers/ForgotPassword';

import PrivateRoute from './privateRoute'

import {history} from './history'

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/sign-up" exact component={SignUp}/>
        <Route path="/forgot-password" exact component={ForgotPassword}/>
        <PrivateRoute component={Dashboard} exact path="/"/>
        <Route path="/login"exact  component={Login}/>
      </Switch>
    </Router>
  );
}

export default Routes;
