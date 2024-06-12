import React, { Component } from 'react'

export class SearchBox extends Component {
  render() {
    const { onSearch } = this.props;
    return (
      <div>
        <input type= "search" placeholder='Search' onChange={(e) => {onSearch(e)}}/>
      </div>
    )
  }
}

export default SearchBox