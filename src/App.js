import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import StartView from './components/StartView'
import axios from 'axios'
import Search from './components/Search'
import PopulationResult from './components/PopulationResult'
import CountryResult from './components/CountryResult'
import NoResult from './components/NoResult'
class App extends Component {
  state = {
    results: [],
    result: [],
    country: '',
    showSearchCity: true,
    showSearchCountry: true,
    showCountryResult: false,
    showPopulationResult: false,
    showNoResult: false
  }
  reset = () => {
    this.setState({
      results: [],
      result: [],
      country: '',
      showSearchCity: true,
      showSearchCountry: true,
      showCountryResult: false,
      showPopulationResult: false,
      showNoResult: false
    })
  }

  onclick = clickObject => {
    this.setState({ result: clickObject, showPopulationResult: true, showCountryResult: false })
  }

  handleSearchCity = inpuText => {
    axios
      .get(
        `http://api.geonames.org/searchJSON?name=${inpuText}&maxRows=1&username=weknowit&orderby=population&cities=cities1000`
      )
      .then(res => this.setState({ result: res.data.geonames[0], showSearchCity: false, showPopulationResult: true }))
      .catch(error => this.setState({ showNoResult: true, showSearchCity: false }))
  }

  handleSearchCountry = inpuText => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${inpuText}`)
      .then(res =>
        axios.get(
          `http://api.geonames.org/searchJSON?country=${
            res.data[0].alpha2Code
          }&maxRows=3&username=weknowit&orderby=population&cities=cities1000`
        )
      )
      .then(res =>
        this.setState({
          results: res.data.geonames,
          country: res.data.geonames[0].countryName,
          showSearchCountry: false,
          showCountryResult: true
        })
      )
      .catch(error => this.setState({ showNoResult: true, showSearchCountry: false }))
      .catch(error => this.setState({ showNoResult: true, showSearchCountry: false }))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header reset={this.reset} />
            <div>
              <div className="center">
                {this.state.showNoResult && <NoResult />}
                <Route
                  exact
                  path="/"
                  render={props => (
                    <React.Fragment>
                      <StartView reset={this.reset} link1={'/searchbycity'} link2={'/searchbycountry'} />
                    </React.Fragment>
                  )}
                />
                <Route
                  path="/searchbycountry"
                  render={props => (
                    <React.Fragment>
                      {this.state.showSearchCountry && (
                        <Search
                          onSubmit={this.handleSearchCountry}
                          title={'SEARCH BY COUNTRY'}
                          placeholder={'Enter a country'}
                        />
                      )}
                      {this.state.showCountryResult && (
                        <CountryResult
                          results={this.state.results}
                          country={this.state.country}
                          onclick={this.onclick}
                        />
                      )}
                      {this.state.showPopulationResult && <PopulationResult result={this.state.result} />}
                    </React.Fragment>
                  )}
                />
                <Route
                  path="/searchbycity"
                  render={props => (
                    <React.Fragment>
                      {this.state.showSearchCity && (
                        <Search
                          onSubmit={this.handleSearchCity}
                          title={'SEARCH BY CITY'}
                          placeholder={'Enter a city'}
                        />
                      )}
                      {this.state.showPopulationResult && <PopulationResult result={this.state.result} />}
                    </React.Fragment>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
