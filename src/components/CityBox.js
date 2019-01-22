import React, { Component } from 'react'

export class CityBox extends Component {
    onItemClick = (e) =>{
        this.props.onclick(this.props.result)
    }
  render() {
    return (
      <div onClick={this.onItemClick} style={{border: 'solid', marginTop: '5px' , paddingTop: '15%', paddingBottom: '15%'}}>
        {this.props.result.name}
      </div>
    )
  }
}

export default CityBox