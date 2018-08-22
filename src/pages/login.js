import React, { Component } from 'react'
import LoginForm from "../components/login/form";
import Grid from '@material-ui/core/Grid'

class Login extends Component {

  render() {
    return (
      <div>
        <p>Login</p>
        <Grid container justify="center" alignItems="center">
          <LoginForm handleUser={this.props.handleUser}/>
        </Grid>
      </div>
    )
  }
}

export default Login