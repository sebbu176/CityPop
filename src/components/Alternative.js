import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class Alternative extends Component {
    render() {
      const  title  = this.props.title
      return (
        <div style={{border: 'solid', flexBasis: '100%'}}>
          <Link style={{textDecoration: 'none'}}to={this.props.link} >
          <h2 style={{color: '#333'}}>{title}</h2>
          </Link>
        </div>
      )
    }
  }

export default Alternative
