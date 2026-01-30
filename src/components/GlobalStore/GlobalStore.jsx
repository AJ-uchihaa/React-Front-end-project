import { useReducer,createContext } from "react";
 export const GlobalContext = createContext(null);

 
const initialState = {
    history : []
};
function GlobalStore(state,action) {
    switch (action.type){
        case 'HIS':
            return {
                history : [...state.history,
                    {
                id: Date.now(),
                text: action.payload.val,
                amount: action.payload.amount
            }
          ] 
        }
            default:
                return state;
    }
}
export const GlobalProvider = ({ children }) =>{
const [state,dispatch] = useReducer(GlobalStore,initialState)


    return(
         <GlobalContext.Provider value={{history: state.history, dispatch}}>
            {children}
        </GlobalContext.Provider>
        
    )
}
