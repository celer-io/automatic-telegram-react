import React from 'react'
import {
  Route,
  Redirect
 } from 'react-router-dom'

import Auth from '../services/auth'

export default ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
)
