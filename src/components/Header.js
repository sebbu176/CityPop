import React, { Component } from 'react'

export class Header extends Component {
render() {
  return (
    <header style={headerStyle}>
      
      <h1>CityPop</h1>
    
    </header>
  )
}}


const headerStyle = {
    color: '#333',
    textAlign: 'center',
    padding: '10px'
  }

export default Header