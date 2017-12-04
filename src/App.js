import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import AuthButton from './components/AuthButton'
import PrivateRoute from './components/PrivateRoute'
import asyncComponent from './components/asyncComponent'
import 'bulma/css/bulma.css' // TODO: find a better solution ?
import 'font-awesome/css/font-awesome.css'
import 'font-awesome/fonts/fontawesome-webfont.woff'

const Login = asyncComponent(() => import('./routes/Login'))
const Pages = asyncComponent(() => import('./routes/Pages'))
const Dashboard = asyncComponent(() => import('./routes/Dashboard'))

const App = () => (
  <Router>
    <div>
      {/* <nav className='navbar'> */}
      <nav className='navbar' style={{backgroundColor: 'ghostwhite'}}>
        <div className='navbar-brand'>
          <div className='navbar-item'>
            <span className='icon is-medium'>
              <i className='fa fa-tty fa fa-x' />
            </span>
            At
          </div>
        </div>
        <div className='navbar-menu'>
          <div className='navbar-start'>
            <Link className='navbar-item'to='/dashboard'>
              <span className='icon'>
                <i className='fa fa-home' />
              </span>
              Dashboard
            </Link>
            <Link className='navbar-item' to='/pages'>
              <span className='icon'>
                <i className='fa fa-file' />
              </span>
              Pages
            </Link>
          </div>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <AuthButton />
            </div>
          </div>
        </div>
      </nav>

      <Route path='/login' component={Login} />
      <PrivateRoute path='/dashboard' component={Dashboard} />
      <PrivateRoute path='/pages' component={Pages} />
    </div>
  </Router>
)

export default App
