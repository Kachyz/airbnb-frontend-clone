import React, { Component } from 'react'

class Home extends Component {

  

  render() {
    return (
      <div onClick={this.props.handleClick}>
        <p> Home </p>
      </div>
    )
  }
}

export default Home