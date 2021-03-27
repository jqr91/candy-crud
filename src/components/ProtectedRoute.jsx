import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {isLoggedIn} from '../services/AuthService';
const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route {...rest} render={
      props => {
        if (isLoggedIn()) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={{pathname:"/"}} />
        }
      }
    } />
  )
}

export default ProtectedRoute;
