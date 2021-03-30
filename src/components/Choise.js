import React from 'react'
import { countries } from '../data/countries'

const Choise = ({title, country , setPoints,score,setTime}) => {



    const handleAnswer =()=>{
       
      const isCorrect=  countries.some(coun=>coun.countrie===country&&coun.capital===title)
       isCorrect ?  setPoints({score:score+1}) :setPoints({score:score+0})

       setTime(10)
    }

    return (
        <div onClick={handleAnswer} className='game__choise'>
            {title}
        </div>
    )
}

export default Choise
