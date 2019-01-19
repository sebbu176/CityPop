import React, { Component } from 'react'

export class PopulationResult extends Component {
  render() {
    return (
      <div style={{textAlign:'center', width: '40%', margin: 'auto' , color: '#FFF'}}>
        <h3 style={{fontSize: '25px'}}>{this.props.result.name}</h3>
        <div style={{border: 'solid'}}>
        <p>Population</p>
        <h2>{this.props.result.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</h2>
        </div>
      </div>
    )
  }
}

export default PopulationResult