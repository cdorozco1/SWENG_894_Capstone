// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the source code for the Charts component

import React from 'react';
import ExpensesPieChart from './charts/ExpensesPieChart';
import IncomeExpensePieChart from './charts/IncomeExpensePieChart';

function Charts() {
    return(
    <div className="container">
        <IncomeExpensePieChart/>
        <ExpensesPieChart/>
    </div>
    );
};

export default Charts;