import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import StartView from './components/StartView'
import axios from 'axios'
import Search from './components/Search'

class App extends Component {
  state = {
    results: [],
    result: [],
    country: ''
  }
  handleSearchCity = inpuText => {
    axios
      .get(
        `http://api.geonames.org/searchJSON?name=${inpuText}&maxRows=1&username=weknowit&orderby=population&cities=cities1000`
      )
      .then(res => this.setState({ result: res.data.geonames[0], showSearchCity: false, showResultBox: true }))
      .catch(error => console.log(error))
  }

  
  handleSearchCountry = inpuText => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${inpuText}?fullText=true`)
      .then(res => axios
        .get(`http://api.geonames.org/searchJSON?country=${res.data[0].alpha2Code}&maxRows=3&username=weknowit&orderby=population&cities=cities1000`))
        .then(res=> 
          this.setState({
            results: res.data.geonames,
            country: res.data.geonames[0].countryName
            
          }))
          .catch(error => console.log(error))
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div className="App">
        <Header />
        <StartView />
        <Search onSubmit={this.handleSearchCountry} title={'Search by country'} placeholder={'Enter a country'} />
        <Search onSubmit={this.handleSearchCity} title={'Search by city'} placeholder={'Enter a city'} />
      </div>
    )
  }
}

export default App
