// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the source code for the balance calculation component in BAE

import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {

  //Get the transactions
  const {transactions} = useContext(GlobalContext);

  //Map dollar amounts, reduce to two decimals and assign to total variable
  const amounts = transactions.map(transaction =>transaction.amount);
  const total = amounts
  .reduce((acc,item) => (acc += item),0)
  .toFixed(2);

    return (
    <>
      <h4>Your Balance</h4>
      <h1> ${total}</h1>
    </>
    )
}
