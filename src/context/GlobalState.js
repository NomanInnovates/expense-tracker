import React,{  createContext, useReducer } from "react"
import appReducer from "./appReducer"


let initialState = {
    transactions:
    [
    {id:1, description:"Project 1 income", amount:1000},
    {id:2, description:"Project 2 income", amount:2000},
    {id:3, description:"Project 3 Salary", amount:-5000},
    {id:4, description:"Project 4 Salary", amount:-1000}
]
}

export const GlobalContext = createContext(initialState)



export function GlobalProvider({children}) {
    const [state,dispatch] = useReducer(appReducer,initialState)
    console.log("state",state)
    const delTransaction = (id) => {
        console.log("delTransaction",id)
        dispatch({
            type:"DELETE_TRANSACTION"
            ,payload:id
        })
    }
  return (
    <GlobalContext.Provider value={{transactions:state.transactions,delTransaction}}>
        {children}
    </GlobalContext.Provider>
  )
}

