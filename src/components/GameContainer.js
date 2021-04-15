import React, { useContext, useEffect } from 'react'
import { userContext } from '../user/userContext'

import Choise from './Choise'
import GameOver from './GameOver'

const GameContainer = () => {
	const {
		user: { score, userTime, gameCount, gameChoises },
		dispatch,
	} = useContext(userContext)
	console.log(gameChoises)

	// fixme: se renderiza 2 veces y hay que arrancar el contador en -1

	const [countrie, ...options] = gameChoises

	useEffect(() => {
		if (gameCount === 10) return
		const initTimer = setInterval(() => {
			dispatch({
				type: 'sub_time',
				payload: userTime - 1,
			})
		}, 1000)
		if (userTime === 0 && gameCount !== 10) {
			dispatch({ type: 'set_choises' })

			dispatch({ type: 'reset_time' })
		}

		return () => {
			clearInterval(initTimer)
		}
	}, [dispatch, userTime, gameCount])

	useEffect(() => {
		dispatch({ type: 'add_gameCount' })
	}, [dispatch, gameChoises])
	return (
		<div className="game__container">
			{gameCount === 10 ? (
				<GameOver points={score} />
			) : (
				<>
					{userTime <= 5 && (
						<p className="game__timeout animate__animated animate__flash animate__infinite">
							<i className="fas fa-stopwatch"></i> Hurry up !
						</p>
					)}
					<p className="game__info">Time: {userTime}</p>
					<p className="game__info">Score: {score}</p>
					<p className="game__info">Count: {gameCount}/10</p>
					<h2>Capital of... </h2>
					<h3 className="game__subtitle">{countrie}</h3>
					<div className="game__optionsContainer">
						{options.map((option, i) => (
							<Choise key={`${option}${i}`} title={option} country={countrie} />
						))}
					</div>
				</>
			)}
		</div>
	)
}

export default GameContainer
