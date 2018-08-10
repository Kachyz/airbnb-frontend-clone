import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class SignupForm extends Component {
  render() {
    return (
      <Card>
        Formulario de registro
        <TextField />
        <TextField />
        <TextField />
        <TextField />
        <TextField type="date"/>
        <Button variant="contained" color="secondary" >
          Registrarse
        </Button>
      </Card>
    )
  }
}

export default SignupForm