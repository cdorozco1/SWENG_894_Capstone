// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the source code for the Net Income component

import React from 'react';
import TotalIncome from '../helperfns/TotalIncome';
import TotalExpenses from '../helperfns/TotalExpenses';

export const NetIncome = () => {
  // Get the total income and total expense dollar amounts, display to net income component
  const income = TotalIncome();
  const expense = TotalExpenses();
  
    return (
        <div className="net-income-container">
          <div>
            <h4>Income</h4>
    <p className="money in">${income}</p>
          </div>
          <div>
            <h4>Expense</h4>
    <p className="money out">${expense}</p>
          </div>
        </div>
    );
}
