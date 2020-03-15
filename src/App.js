import React, { Component } from 'react';
import WeatherList from './Components/WeatherList';
import SearchPage from './Components/SearchPage';
import Buttons from './Components/Buttons';


import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherData: [],
      input: '',
      dateRange:'',
      options: ['Daily Forecast','5 Day Forecast','16 Day Forecast']
    }
  }

  onSearchChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onSubmit = () => {
    let input = this.state.input
    let options = this.state.dateRange

    console.log(options)

    if(options ==='Daily Forecast') {
      fetch(`https://peaceful-thicket-43573.herokuapp.com/api/weather/current?zip=${input}`)
			.then(response => response.json())
			.then(data => console.log(data))
    }
    else if(options ==='5 Day Forecast') {
      fetch(`https://peaceful-thicket-43573.herokuapp.com/api/weather/forecast?zip=${input}`)
      .then(response => response.json())
      .then(data => console.log(data))
      } else {
        alert('Please select a Date Range')
      }
    }

  onToggleChange = (event) => {
    this.setState({ dateRange: event.target.value})
  }
  
  render() {
    const {weatherData, options} = this.state;
    const { onSearchChange, onSubmit, onToggleChange} = this;
      return (
        <div className ='tc'>
{            /* <SearchBox searchChange={onSearchChange}/>
            <DropdownList options={options} toggleChange={onToggleChange}/>
            <div className="">
			      <input 
			      	onClick={onSubmit}
			      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
			      	type="submit" 
			      	value="Sign in" 
			      	/>
			    </div> */}
             <SearchPage searchChange={onSearchChange} submitButton={onSubmit} />
             <div className="weathericon clearNightIcon"></div>
             <div className="weathericon lightningIcon"></div>
             <div className="weathericon rainyIcon"></div>
              {/* <Buttons options={options} toggleChange={onToggleChange}/> */}
          {     
            (weatherData.length === 0) 
              ? null
              : ( <WeatherList weatherData = {weatherData} />)
          }
        </div>
      );
    }
  }

  export default App;
