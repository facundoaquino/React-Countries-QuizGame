import React, { useEffect, useState } from 'react'
import { randomChoise } from '../helpers/randomChoise'
import Choise from './Choise'
import GameOver from './GameOver'

const GameContainer = () => {
	const [points, setPoints] = useState({ score: 0 })
	// fixme: se renderiza 2 veces y hay que arrancar el contador en -1
	const [count, setCount] = useState(-1)
	const [choises, setChoises] = useState(randomChoise())
	const [time, setTime] = useState(10)
	const [countrie, ...options] = choises
	console.log('here')
	useEffect(() => {
		setChoises(randomChoise())
	}, [points])

	useEffect(() => {
		const initTimer = setInterval(() => {
			setTime(time - 1)
		}, 1000)
		if (time === 0 && count !== 10) {
			setChoises(randomChoise())

			setTime(10)
		}

		return () => {
			clearInterval(initTimer)
		}
	}, [time])

	useEffect(() => {
		setCount((c) => c + 1)
	}, [choises])
	return (
		<div className="game__container">
			{count === 10 ? (
				<GameOver points={points.score}/>
			) : (
				<>
					{time <= 5 && (
						<p className="game__timeout animate__animated animate__flash animate__infinite">
							<i className="fas fa-stopwatch"></i> Hurry up !
						</p>
					)}
					<p className="game__info">Time: {time}</p>
					<p className="game__info">Score: {points.score}</p>
					<p className="game__info">Count: {count}/10</p>
					<h2>Capital of... </h2>
					<h3 className="game__subtitle">{countrie}</h3>
					<div className="game__optionsContainer">
						{options.map((option, i) => (
							<Choise
								setTime={setTime}
								key={`${option}${i}`}
								title={option}
								country={countrie}
								setPoints={setPoints}
								score={points.score}
							/>
						))}
					</div>
				</>
			)}
		</div>
	)
}

export default GameContainer
