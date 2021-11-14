// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the source code for calculating total expense for eating out

import {useContext, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';

function ToatlExpCategory(ExpenseCategory) {
    // Get transactions from the global context
    const {transactions, getTransactions} = useContext(GlobalContext);

    useEffect(() =>{
        getTransactions();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    // Filter transactions to expense and eating out entries
    const expCatTransactions = transactions.filter(transaction =>transaction.income === "Expense" && transaction.transtype === ExpenseCategory);
    // Console log for debug
    // console.log(eatingOutTransactions);

    // Map eating out amounts
    const expCatAmounts = expCatTransactions.map(expCatTransactions => expCatTransactions.amount);

    // Sum eating out transacation amounts
    const totalExpCategory = expCatAmounts
        .reduce ((acc,item) => (acc+=item),0)
        .toFixed(2);    

    return totalExpCategory;
    
};

export default ToatlExpCategory;