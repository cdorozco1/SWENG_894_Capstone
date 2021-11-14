// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the source code for the Transaction component

import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { format } from 'date-fns';


export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const dateForm= format(new Date(transaction.date), 'yyyy/MM/dd');
    
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus':'plus'}>
            {transaction.text} 
            <span>{transaction.income}</span>
            <span>{transaction.transtype}</span>
            <span>{dateForm}</span>
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick ={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
        </li> 
    )
}
