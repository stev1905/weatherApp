import React from 'react';
import Weather from './Weather';

const WeatherList = ({ weatherData }) => {
	return(
		<Weather
			location = {weatherData.name}
			max = {weatherData.max}
			min = {weatherData.min}
		/>	
	);
}

export default WeatherList;