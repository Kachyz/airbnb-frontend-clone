import React, {Component} from 'react'
import SignupForm from '../components/signup/form'
import Grid from '@material-ui/core/Grid'

class Signup extends Component {
  render() {
    return(
      <div>
        <Grid container justify="center" alignItems="center">
          <SignupForm handleUser={this.props.handleUser}/>
        </Grid>
      </div>
    )
  }
}

export default Signup