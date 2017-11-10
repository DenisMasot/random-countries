import React, { Component } from 'react';
import countries from './countriesData';
import cities from './citiesData';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {n: Math.floor(Math.random() * countries.length)};
  }


  handleClick(){
    var rand = Math.floor(Math.random() * countries.length);
    if (rand !== this.state.n) {
      this.setState({ n: rand});
    }else{
      this.handleClick();
    }
  }


  city(){
    var city;
    for(var i = 0; i < cities.length ; i++){
      if (countries[this.state.n].code === cities[i].country){
        city = cities[i].name;
        return city
      }
    }
    if (city === undefined) {
      city = "Capital not found"
      return city
    }
  }


  render(country){
    return(
      <div className="App">
        <p className="name">
          {countries[this.state.n].country}
        </p>
        <p className="city">
          {this.city()}
        </p>
        <button onClick={this.handleClick.bind(this)}>
          random
        </button>
      </div>
    )
  }
}

export default App;
