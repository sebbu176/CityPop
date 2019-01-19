import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component {
render() {
  return (
    <header style={headerStyle}>
      <Link style={linkStyle} onClick={this.props.reset.bind()} to="/">
      <h1>CityPop</h1>
      </Link>
    </header>
  )
}}


const headerStyle = {
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
  }
  const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
  }

export default Header