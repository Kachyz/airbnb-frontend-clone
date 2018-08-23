import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'

class CreateHome extends Component {

  render() {
    return (
      <div>
        <Grid container justify="center" alignItems="center">
          <SignupForm handleUser={this.props.handleUser}/>
        </Grid>
      </div>
    )
  }
}

export default CreateHome