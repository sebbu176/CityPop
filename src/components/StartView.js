import React, { Component } from 'react'
import Alternative from './Alternative'
export class StartView extends Component {
    state = {
        country: 'Search by Country',
        city: 'Search by City'
      }
      render() {
        return (
          <div style={divStyle}>
            <Alternative title={this.state.city}  link={this.props.link1} />
            <Alternative title={this.state.country} link={this.props.link2}  />
          </div>
        )
      }
    }
    
    const divStyle = {
      display: 'flex',
      flexDirection: 'row',
      textAlign: 'center',
      color: '#fff',
      marginTop: '20%'
    }

export default StartView
