import React, { Component } from 'react'
import SearchForm from '../components/search/search'
import Results from '../components/search/results'

class Search extends Component {

  state = {
    homes: []
  }

  handleHomeSearch = (homes) => {
    this.setState({
      homes
    })
  }

  render() {
    return (
      <div>
        <SearchForm token={this.props.token} handleHomeSearch={this.handleHomeSearch} />
        <Results homes={this.state.homes} />
      </div>
    )
  }
}

export default Search