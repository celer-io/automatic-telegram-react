import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import AuthButton from './components/AuthButton'
import PrivateRoute from './components/PrivateRoute'
import asyncComponent from './components/asyncComponent'

const Login = asyncComponent(() => import('./routes/Login'))
const Pages = asyncComponent(() => import('./routes/Pages'))
const Dashboard = asyncComponent(() => import('./routes/Dashboard'))

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
