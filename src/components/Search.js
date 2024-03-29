import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export class Search extends Component {
  state = {
    inputText: ''
  }
  onChange = e => {
    this.setState({
      inputText: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.inputText)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ textAlign: 'center', color: '#fff', marginTop: '5%' }}>
        <h3>{this.props.title}</h3>
        <input
          type="text"
          placeholder={this.props.placeholder}
          style={{ margin: '5% auto 3% auto', display: 'block', textAlign: 'center', border: 'solid', width: '80%', paddingTop: '1%', paddingBottom: '1%'}}
          onChange={this.onChange}
        />
        <button
          type="submit"
          className="btn"
          style={{ margin: 'auto', display: 'block', borderRadius: '50%', height: '40px', width: '40px', marginTop: '10px'}}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    )
  }
}

export default Search
