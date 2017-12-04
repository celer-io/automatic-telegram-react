import React from 'react'
import { Redirect } from 'react-router-dom'

import Auth from '../services/auth'

class Login extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      redirectToReferrer: false
    }

    this.login = () => {
      Auth.authenticate(() => {
        this.setState({ redirectToReferrer: true })
      })
    }
  }

  render () {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

export default Login
