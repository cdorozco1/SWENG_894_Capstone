// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the source code for the Net Income component

import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const NetIncome = () => {
  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction =>transaction.amount);


  const income = amounts
  .filter (item => item>0)
  .reduce ((acc,item) => (acc+=item),0)
  .toFixed(2);

  const expense = amounts
  .filter(item =>item < 0)
  .reduce ((acc,item) => (acc+=item),0)
  .toFixed(2);
  
    return (
        <div className="net-income-container">
          <div>
            <h4>Income</h4>
    <p className="money in">${income}</p>
          </div>
          <div>
            <h4>Expense</h4>
    <p  className="money out">${expense}</p>
          </div>
        </div>
    );
}
