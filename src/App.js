import React, { useReducer }  from 'react'
import GameContainer from './components/GameContainer';
import { randomChoise } from './helpers/randomChoise';
import { userContext } from './user/userContext';
import { userReducer } from './user/userReducer';


function App() {
  const [user, dispatch] = useReducer(userReducer, {score:0,userTime:10,gameCount:0,gameChoises:randomChoise()})

  return (
    <div className="App">
      <h1 className='app__title'>Countries Quiz</h1>

      <userContext.Provider value={{user,dispatch}}>
      <GameContainer />

      </userContext.Provider>

    </div>
  );
}

export default App;
