import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import StartView from './components/StartView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <StartView/>
      </div>
    )
  }
}

export default App
