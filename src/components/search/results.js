import React, { Component } from 'react'

class Results extends Component {

  render() {
    console.log("From RESULTS", this.props.message)
    return (
      <div>
        Soy los RESULTADOS
      </div>
    )
  }
}

export default Results