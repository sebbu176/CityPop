import React, { Component } from 'react'

export class Alternative extends Component {
  render() {
    const title = this.props.title
    return (
      <div style={{ border: 'solid', flexBasis: '100%' }}>
        <h2 style={{ color: '#333' }}>{title}</h2>
      </div>
    )
  }
}

export default Alternative
