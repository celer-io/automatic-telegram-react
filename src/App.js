import { React, Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import AuthButton from './components/AuthButton'
import PrivateRoute from './components/PrivateRoute'

import Dashboard from './routes/dashboard'
import Login from './routes/login'
import Pages from './routes/pages'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <AuthButton />
          <ul>
            <li><Link to='/'>Dashboard</Link></li>
            <li><Link to='/pages'>Pages</Link></li>
          </ul>
          <Route path='/login' component={Login} />
          <PrivateRoute path='/' component={Dashboard} />
          <PrivateRoute path='/pages' component={Pages} />
        </div>
      </Router>
    )
  }
}

export default App
