import React from 'react';
import { Button} from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Buttons = ({ options, toggleChange }) => {
    return (
    <ButtonGroup className="bb">
        {
        options.map((option, i) => 
            <Button 
                type='tex'
                key={i}
                onClick={toggleChange} 
                value={option}
                className="f6 link black ba ph3 pv2 mb2 b--black bg-transparent bg-animate hover-bg-black hover-white mh3 mv3 pointer">
                    {option}
            </Button>
            )
        }    
        </ButtonGroup>
    );
}

export default Buttons;