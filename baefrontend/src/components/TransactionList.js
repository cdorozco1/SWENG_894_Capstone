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

return(
    // Create a table for the transaction list
    <div className="tableStyle">
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Income/Expense</th>
          <th>Category</th>
          <th>Date</th>
          <th>Amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </tbody>
    </table>
  </div>
);
}
