import React, { Component } from 'react'
import CityBox from './CityBox'
import NoResult from './NoResult';

export class SearchResult extends Component {
  render() {
    return (
      <div style={{ margin: 'auto', textAlign: 'center', width: '200px', color: '#fff'}}>
        {this.props.results.length === 0 ? (
          <NoResult />
        ) : (
          <div>
            <h1>{this.props.country}</h1>
            {this.props.results.map(result => (
              <CityBox onclick={this.props.onclick} key={result.geonameId} result={result} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default SearchResult
