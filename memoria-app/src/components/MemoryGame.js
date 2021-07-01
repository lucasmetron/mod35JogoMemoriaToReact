import React, { useState } from 'react';
import GameOver from './GameOver';

function MemoryGame() {

    const [gameOver, setGameOver] = useState(false);

    function restart() {
        setGameOver(true)
    }


    return (
        <div>
            <GameOver show={gameOver} handleRestart={restart}></GameOver>
        </div>
    );
}

export default MemoryGame;