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
        <tr style={{ color: sign === '+' ? "#2ecc71" : "#c0392b" }}>
            <td>{transaction.text}</td> 
            <td>{transaction.income}</td>
            <td>{transaction.transtype}</td>
            <td>{dateForm}</td>
            <td>{sign}${Math.abs(transaction.amount)}</td>
            <td>
            <button onClick ={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
            </td>
        </tr> 
    )
}
