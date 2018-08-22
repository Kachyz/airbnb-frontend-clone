import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'

class LoginForm extends Component {

  state = { 
    email: "",
    password: "",
  }

  handleField = (event) => {
    const key = event.target.id
    this.setState({
      [key]: event.target.value
    })
    console.log(this.state);
  }

  handleClick = (event) => {
    event.preventDefault()
    const url = "http://localhost:3000/users/login"
  console.log('front', this.state);
    axios.post(url, 
      {
        user: this.state
      })
      .then( response => {
        console.log(response)
        this.props.handleUser(true, response.data.token)
      })
      .catch( error => {
        console.log("Error:", error)  
      })
  }
  

  render() {
    return (
      <Card>
        Formulario de Login
        <TextField 
          id ="email"
          value = {this.state.email}
          onChange = {this.handleField}
        />
        <TextField 
          id ="password"
          value = {this.state.password}
          onChange = {this.handleField}
        />
        <Button variant="contained" color="secondary" 
          onClick={this.handleClick}
        >
          Login
        </Button>
      </Card>
    )
  }
}

export default LoginForm