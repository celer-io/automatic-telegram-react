import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link // ,
  // Redirect
} from 'react-router-dom'

import AuthButton from './components/AuthButton'
import PrivateRoute from './components/PrivateRoute'
// import Auth from './services/auth'

import Login from './routes/Login'
import Pages from './routes/Pages'
import Dashboard from './routes/Dashboard'

const App = () => (
  <Router>
    <div>
      <AuthButton />
      <ul>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/pages'>Pages</Link></li>
      </ul>
      <Route path='/login' component={Login} />
      <PrivateRoute path='/dashboard' component={Dashboard} />
      <PrivateRoute path='/pages' component={Pages} />
    </div>
  </Router>
)

export default App
