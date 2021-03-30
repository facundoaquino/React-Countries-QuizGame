import React from 'react'

const GameOver = ({points}) => {
    return (
        <div>
            <h4>Game over..</h4>
            <p>Points: {points}</p>
            <a className='gameover__play' href="/">Play Again</a>
        </div>
    )
}

export default GameOver
