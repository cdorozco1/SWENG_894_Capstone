// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the source code for the Transaction List Component

import React, {useContext, useEffect} from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';


export const TransactionList = () => {
    const {transactions, getTransactions} = useContext(GlobalContext);

    useEffect(() =>{
        getTransactions();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <h3 data-testid="header">Transaction List</h3>
            <ul className="list">
                {transactions.map(transaction =>(<Transaction key= {transaction.id}  transaction = {transaction}/>))}
            </ul>
        </>
    )
}
