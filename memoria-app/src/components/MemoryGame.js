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

    function handleRestart() {
        setGameOver(false)
        game.clearCards()
        setCards(game.createCardsFromTechs())

    }

    function handleFlip(card) {


        if (game.setCard(card.id)) {

            if (game.secondCard) {
                if (game.checkMatch()) {
                    game.clearCards();
                    if (game.checkGameOver()) {
                        setGameOver(true)
                    }
                } else {
                    setTimeout(() => {

                        game.unflipCards();
                        setCards([...game.cards])
                    }, 1000);

                };
            }
        }

        setCards([...game.cards])


    }


    return (
        <div>
            <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
            <GameOver show={gameOver} handleRestart={handleRestart}></GameOver>
        </div>
    );
}

export default MemoryGame;