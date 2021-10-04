// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the implementation for the transaction list compnent in the BAE app

import React, {useContext} from 'react'
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';


export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);
    return (
        <>
            <h3 data-testid="header">Transaction List</h3>
            <ul className="list">
                {transactions.map(transaction =>(<Transaction key= {transaction.id}  transaction = {transaction}/>))}
            </ul>
        </>
    )
}
