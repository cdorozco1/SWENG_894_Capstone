// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the source code for calculating total expense amount

import {useContext, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';

function TotalExpenses() {
    const {transactions, getTransactions} = useContext(GlobalContext);

    useEffect(() =>{
        getTransactions();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const amounts = transactions.map(transaction =>transaction.amount);

    const expense = amounts
        .filter (item => item<0)
        .reduce ((acc,item) => (acc+=item),0)
        .toFixed(2);

    return expense;
};

export default TotalExpenses;