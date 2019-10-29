import React from 'react';
import PropTypes from 'prop-types'
import './styles.css'
import { type } from 'os';


//gives access directly to the props
export default function Card ({ handleClick, id, type, flipped, height, width, solved, disabled}){
    //destructor of the properties, gives access to these properties
  
  
    return<div
    className={`flip-container  ${flipped ? 'flipped' : ''}`}
    style={{
        width,height
    }}
    onClick={() => disabled ? null : handleClick(id)} //handleClick function contains the id of the card being flipped
    >
        <div className="flipper">
            <img 
            style={{
                height, width
            }}
            className={flipped ? 'front' : 'back'}//class name of the object is dependent of wheather the card is flipped front or back
            src={flipped || solved ? `/img/${type}.png` : '/img/bakc.png'}
            />
        </div>
    </div>
    
}
Card.propTypes={//determining the property type of each state
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired, 
    flipped: PropTypes.bool.isRequired,
    solved: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    disabled: PropTypes.bool.isRequired

}

