// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the source code for the Charts component

// Imports
import React from 'react';
import {GlobalProvider} from '../context/GlobalState'
import IncomeExpensePieChart from './charts/IncomeExpensePieChart';
import ExpensesPieChart from './charts/ExpensesPieChart';
// Styling import
import '../styling/styles.css'

function Charts(){
    return (
        <GlobalProvider>
         <div className="chartcontainer">
          <IncomeExpensePieChart/>
          <ExpensesPieChart/>
         </div>
        </GlobalProvider>
    );
}

export default Charts;