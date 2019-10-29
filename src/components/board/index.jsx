import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card'
import './styles.css'

export default function Board ({
    dimension,
    cards,
    flipped,
    handleClick,
    solved,
    disabled,
    //here we are destructiong the function with the functions we will be using in the this file
})
{
    return (
    <div className="board">
        {cards.map((card) => ( 
            <Card 
                key={card.id}
                id={card.id}
                type={card.type}
                width={dimension / 4.5}
                height={dimension / 4.5}
                flipped= {flipped.includes(card.id)}
                solved= {solved.includes(card.id)}
                handleClick= {handleClick} //this changes the clicked state of the card
                disabled={disabled || solved.includes(card.id)}
                />
            ))}
    </div>
    )
}


//create properties

Board.propTypes={
    disabled: PropTypes.bool.isRequired,
    dimension: PropTypes.number.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    solved: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,
}