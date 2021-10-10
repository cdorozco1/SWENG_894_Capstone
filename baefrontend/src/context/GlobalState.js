// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE

import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer'
import axios from 'axios';

// Initial state variable
const initialState = {
    transactions: [],
    error: null,
    loading: true 
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch]=useReducer(AppReducer, initialState);
    
    // Actions
    async function getTransactions(){
        try{
            const res = await axios.get('api/v1/transactions');
            
            dispatch({
                type:'GET_TRANSACTIONS',
                payload: res.data.data
            });

        } catch(err){
            dispatch({
                type:'TRANSACTION_ERROR',
                payload: err.response.data.error
            });

        }
    }
    
    async function deleteTransaction (id){
        try{
            await axios.delete (`api/v1/transactions/${id}`)
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });

        }catch(err){
            dispatch({
                type:'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
        
    }

    async function addTransaction (transaction){
        const config = {
            header: {
                'Content-Type':'application/json'
            }
        }
        try{
            const res = await axios.post('api/v1/transactions',transaction,config);
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            });
        }catch(err){
            dispatch({
                type:'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
        
    }

    return(<GlobalContext.Provider value={{
        transactions:state.transactions,
        getTransactions,
        error: state.error,
        loading: state.loading,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}