import React from 'react'

import { Route, Redirect, RouteProps } from 'react-router'

import Dashboard from '../Containers/Dashboard';

const PrivateRoute  = React.forwardRef<HTMLAnchorElement, RouteProps>((props, ref)  => {
    const isLogged = !!localStorage.getItem('app-token');
    return isLogged ? <Route {...props}/> : <Redirect to="/login"/>
});

export default PrivateRoute;