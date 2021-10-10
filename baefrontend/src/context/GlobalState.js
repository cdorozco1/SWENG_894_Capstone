// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE

import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer'

// Initial state variable
const initialState = {
    transactions: [] 
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch]=useReducer(AppReducer, initialState);
    
    // Actions
    function deleteTransaction (id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction (transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return(<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}