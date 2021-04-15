import { randomChoise } from "../helpers/randomChoise"






export const userReducer = (state={},  action)=>{

        switch (action.type){
            case 'add_score':
                return{
                    ...state,
                    score:action.payload
                }
             case 'sub_time':
                 return{
                     ...state,
                     userTime:action.payload
                 }  
             case 'reset_time':
                    return{
                        ...state,
                        userTime:10
                    }   
              case'add_gameCount':
              return{
                  ...state,
                  gameCount:state.gameCount +1
              } 
              case 'set_choises':
                  return {
                      ...state,
                      gameChoises:randomChoise()
                  }      
             default: 
                return state
        }
}