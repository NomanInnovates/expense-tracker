import React, { createContext, useReducer } from "react"
import appReducer from "./appReducer"

let initialState = {
    transactions: []
}

export const GlobalContext = createContext(initialState)

export function GlobalProvider({ children }) {
    const [state, dispatch] = useReducer(appReducer, initialState)
 
    const delTransaction = (id) => {

        dispatch({
            type: "DELETE_TRANSACTION"
            , payload: id
        })
    }

    const addTransaction = (transaction) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{ transactions: state.transactions, delTransaction, addTransaction }}>
            {children}
        </GlobalContext.Provider>
    )
}

