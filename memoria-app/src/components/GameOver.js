import React, { Fragment } from 'react';

function GameOver(props) {


    return (props.show ?
        <div id="gameOver">
            <div>
                Parabéns, você completou o jogo!
            </div>
            <button id="restart" onClick={props.handleRestart}>Jogue novamente</button>

        </div> : <Fragment></Fragment> /* Este componente joga uma div vazia */
    );
}

export default GameOver;