// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE

import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer'

// Initial state variable
const initialState = {
    transactions: [
          { id: 1, income: "Expense", text: 'Milk', transtype:"Groceries", date:"2021-09-15" , amount: -20 },
          { id: 2, income: "Income",  text: 'Paycheck', transtype:"Income",date:"2021-09-15", amount: 300 },
          { id: 3, income: "Expense", text: 'Book',   transtype:"School", date:"2021-09-15", amount: -10 },
          { id: 4, income: "Expense",  text: 'Camera', transtype: "Leisure", date:"2021-09-15", amount: 150 }
        ] 
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