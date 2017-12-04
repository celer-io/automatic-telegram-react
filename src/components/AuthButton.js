import React from 'react'
import {
  withRouter,
  Link
} from 'react-router-dom'

import Auth from '../services/auth'

const AuthButton = withRouter(({ history }) => (
  Auth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        Auth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in, click <Link to='/login'>Here</Link> to login</p>
  )
))

export default AuthButton
