import React, { useContext } from 'react'
import { countries } from '../data/countries'
import { userContext } from '../user/userContext'

const Choise = ({ title, country }) => {
	const {
		user: { score },
		dispatch,
	} = useContext(userContext)

	const handleAnswer = () => {
		const isCorrect = countries.some((coun) => coun.countrie === country && coun.capital === title)
		dispatch({ type: 'add_score', payload: score + isCorrect })
		dispatch({type:'set_choises'})
		dispatch({ type: 'reset_time' })
	}

	return (
		<div onClick={handleAnswer} className="game__choise">
			{title}
		</div>
	)
}

export default Choise
