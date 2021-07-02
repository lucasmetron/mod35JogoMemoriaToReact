import React from 'react';
import CardElement from './CardElement';

function GameBoard(props) {



    return (
        <div id="gameBoard">
            {props.cards.map((card, index) => {
                return (
                    <CardElement handleFlip={props.handleFlip} key={index} card={card}></CardElement>
                )


            })}
        </div>
    );
}


export default GameBoard;