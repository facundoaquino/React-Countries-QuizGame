import { countries } from '../data/countries'

const random = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min
}

const sortChoise = (choise = [])=>{
    const[countrie,...options ] = choise
    // console.log(countrie);
    // console.log(options);
    const response = []
    while(options.length){

        const randomIndex = random(0,options.length)
        response.push(options[randomIndex])
         
        options.splice(randomIndex,1)
    }

     
    return [countrie , ...response]
}

export const randomChoise = () => {
	const response = countries.reduce((acc, coun, inx, arr) => {
		const randomIndex = random(0, countries.length)
		const { countrie, capital } = arr[randomIndex]
		// console.log();
		if (acc.length < 5) {
			if (acc.length === 0) {
                acc.push(countrie, capital)
			}else{
                acc.push(capital)
            }
            
		}

		return acc
	}, [])
    
  return  sortChoise(response)
}
