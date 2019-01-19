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
      <form onSubmit={this.handleSubmit} style={{ textAlign: 'center' }}>
        <h3>{this.props.title}</h3>
        <input
          type="text"
          placeholder={this.props.placeholder}
          style={{ margin: 'auto', display: 'block', textAlign: 'center', border: 'solid', width: '30%', paddingTop: '1%', paddingBottom: '1%'}}
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
