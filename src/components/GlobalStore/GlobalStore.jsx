import { useReducer,createContext } from "react";
 export const GlobalContext = createContext(null);

 
const initialState = {
    history : []
}
function GlobalStore(state,action) {
    switch (action.type){
        case 'HIS':
            return {
                history : [...state.history,
                    {
                id: Date.now(),
                text: action.payload.text,
                amount: action.payload.amount
            }
          ] 
        }
            default:
                return state;
    }
}
export const GlobalProvider =({ Children }) =>{
const [state,dispatch] = useReducer(GlobalStore,initialState)


    return(
         <GlobalContext.Provider value={{state,dispatch}}>
            {Children}
        </GlobalContext.Provider>
        
    )
}
