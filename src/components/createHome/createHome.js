import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'

class SignupForm extends Component {

  state = { // Esta es la forma de hacerlo para versiones mas nuevas de Node, si no debe estar dentro del constructor
    title: "",
    address: "",
    capacity: "",
    lat: "",
    long: "",
    type: "",
    price: "",
    description: "",
    user_id: '',
    services: [],
    beds: '',
    datesNotAvailable: [],
    city: ''
  }

  handleField = (event) => {
    const key = event.target.id
    this.setState({
      [key]: event.target.value
    })
  }

  handleClick = (event) => {
    event.preventDefault()
    const url = "http://localhost:3000/users/signup"
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
        Formulario de registro
        <TextField 
          id ="email"
          value = {this.state.email}
          placeholder = "Email"
          onChange = {this.handleField}
        />
        <TextField 
          id ="name"
          value = {this.state.name}
          placeholder = "Name"
          onChange = {this.handleField}
        />
        <TextField 
          id ="lastName"
          value = {this.state.lastName}
          placeholder = "LastName"
          onChange = {this.handleField}
        />
        <TextField 
          id ="password"
          value = {this.state.password}
          placeholder = "Password"
          onChange = {this.handleField}
        />
        <TextField 
          id = "date"
          type="date"
          value = {this.state.date}
          onChange = {this.handleField}
        />
        <Button variant="contained" color="secondary" 
          onClick={this.handleClick}
        >
          Registrarse
        </Button>
      </Card>
    )
  }
}

export default SignupForm