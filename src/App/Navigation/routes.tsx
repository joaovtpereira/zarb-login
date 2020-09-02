import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from '../Containers/Login';
import Dashboard from '../Containers/Dashboard';
import SignUp from '../Containers/SignUp';
import ForgotPassword from '../Containers/ForgotPassword';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login}/>
      <Route path="/sign-up" component={SignUp}/>
      <Route path="/forgot-password" component={ForgotPassword}/>
      <Route path="/dashboard" component={Dashboard}/>
    </BrowserRouter>
  );
}

export default Routes;
