import React, { Component} from 'react';
import SearchBox from './Components/SearchBox';
import WeatherList from './Components/WeatherList';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherData: [],
      input: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({input: event.target.value});
  }

  onSubmit = () => {
    let input = this.state.input
		fetch(`https://peaceful-thicket-43573.herokuapp.com/api/weather/current?zip=${input}`)
			.then(response => response.json())
			.then(data => { this.setState({weatherData: {
        name: data.name,
        max: data.main.temp_max,
        min: data.main.temp_min
      }
    })}) 
  }   
  
  render() {
    const {weatherData} = this.state;
    console.log(weatherData.length);
      return (
        <div className ='tc'>
            <h1 className='f1'>Weather App</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
            <div className="">
              <input 
                onClick={this.onSubmit}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                type="submit" 
                value="Submit" 
              />
          </div>
          {
            
            (weatherData.length === 0) 
              ? null
              : (
                <WeatherList 
                  weatherData = {weatherData} />
            )
          }
        </div>
      );
    }
  }

export default App;
