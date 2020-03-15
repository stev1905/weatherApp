import React from 'react';

const DropdownList = ({ options, toggleChange }) => {
	return (   
        <select onChange={toggleChange} className='pa3 ml4 ba b--green bg-lightest-blue'>
            {
                options.map((option, i) => <option key={i} value={option}>{option}</option>)

            }   
        </select>
	); 
}

export default DropdownList;