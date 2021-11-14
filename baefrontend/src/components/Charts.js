// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the source code for the Charts component

// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the source code for the dashboard component

// Imports
import React from 'react';
import {GlobalProvider} from '../context/GlobalState'
import IncomeExpensePieChart from './charts/IncomeExpensePieChart';
import ExpensesPieChart from './charts/ExpensesPieChart';

function Charts(){
    return (
        <GlobalProvider>
         <div className="container">
          <IncomeExpensePieChart/>
          <ExpensesPieChart/>
         </div>
        </GlobalProvider>
    );
}

export default Charts;