import React, { useEffect, useState } from 'react';
import GameBoard from './GameBoard';
import GameOver from './GameOver';
import game from '../game/game';

function MemoryGame() {

    const [gameOver, setGameOver] = useState(false);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(game.createCardsFromTechs())
    }, [])

    function restart() {
        setGameOver(true)
    }


    return (
        <div>
            <GameBoard cards={cards}></GameBoard>
            <GameOver show={gameOver} handleRestart={restart}></GameOver>
        </div>
    );
}

export default MemoryGame;