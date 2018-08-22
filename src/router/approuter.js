import React, { Component } from 'react'
import { Router, Route, Switch, Link, BrowserRouter } from 'react-router-dom'
import CreateHome from '../pages/createHome'
import Home from '../pages/home'
import Login from '../pages/login'
import MakeReservation from '../pages/makeReservation'
import Search from '../pages/search'
import Signup from '../pages/signup'
import PrivateRoute from './private'
import PublicRoute from './public'

class AppRouter extends Component {

  state = {
    isLoggedIn: false,
    token: ''
  }

  handleUser = (status, token) => {
    this.setState({
      isLoggedIn: status,
      token: token
    })
  }
  

  render () {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/create"> Create </Link>
            </li>
            <li>
              <Link to="/signup"> Signup </Link>
            </li>
            <li>
              <Link to="/login"> Login </Link>
            </li>
            <li>
              <Link to="/reservation"> Reservation </Link>
            </li>
            <li>
              <Link to="/search"> Search </Link>
            </li>
          </ul>

          <Switch> 
            <Route path='/' component={Home} exact={true} /> {/* el 'exact' toma la ruta tal cual, sin agregarle nada */}
            <PrivateRoute path='/create' component={CreateHome} isLoggedIn={this.state.isLoggedIn} />
            <PublicRoute path='/signup' component={Signup} handleUser={this.handleUser} isLoggedIn={this.state.isLoggedIn} />
            <PublicRoute path='/login' component={Login} handleUser={this.handleUser} isLoggedIn={this.state.isLoggedIn} />
            <PrivateRoute path='/reservation' component={MakeReservation} isLoggedIn={this.state.isLoggedIn} />
            <PrivateRoute path='/search' component={Search} isLoggedIn={this.state.isLoggedIn} token={this.state.token} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

export default AppRouter