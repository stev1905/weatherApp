import React from 'react';


const Weather = ({location, max, min}) => {
	return(
		<div className ='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img alt ='weather img' src={`https://robohash.org/?size=200x200`} />
			<div>
				<h2>{location}</h2>
				<p>High: {max}</p>
				<p>Low: {min}</p>
			</div>
		</div>
	);
}
export default Weather;