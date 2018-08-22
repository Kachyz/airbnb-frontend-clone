import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios';

class SearchFrom extends Component {

  state = {
    search: "",
    token: ""
  }

  handleSearch = (event) => {
    this.setState({
        search: event.target.value
    })
  }

  handleClick = (event)  => {
    console.log("el token:", this.props.token)
    event.preventDefault();
    const url = "http://localhost:3000/homes/" + this.state.search;
    axios.get(url, {
        headers: {
            token: this.props.token
        }
    }).then((response) => {
        console.log(response)
        this.props.handleHomeSearch(response.data.homes)
    }).catch((error) => {
        console.log(error);
    })
  }

  render() {
    return (
      <div>
        <TextField 
          id ="search"
          value = {this.state.search}
          onChange = {this.handleSearch}
        />
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={this.handleClick}
        >
          Search
        </Button>
      </div>    
    )
  }
}

export default SearchFrom