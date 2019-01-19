import React, { Component } from 'react'

export class PopulationResult extends Component {
  render() {
    return (
      <div style={{textAlign:'center', width: '40%', margin: 'auto'}}>
        <h3>{this.props.result.name}</h3>
        <div style={{border: 'solid'}}>
        <p>Population</p>
        <h2>{this.props.result.population}</h2>
        </div>
      </div>
    )
  }
}

export default PopulationResult