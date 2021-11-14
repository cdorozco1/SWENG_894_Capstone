// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the source code for the Income vs Expense Pie Chart component

import React from 'react';
import { Pie } from 'react-chartjs-2';
import TotalExpenses from '../../helperfns/TotalExpenses';
import TotalIncome from '../../helperfns/TotalIncome';


const IncomeExpensePieChart = () => {
  // Get the total income and total expense to generate the pie
  const income = TotalIncome();
  const expense = TotalExpenses();
  
  // Console logging for debug
  // console.log(income, expense);

  // Generate the pie chart
  return(
  <>
    <div className='header'>
      <h2 className='title'>Income vs Expense Pie Chart</h2>
    </div>
    <Pie 
    data={{
      labels: ['Expense', 'Income'],
      datasets: [
        {
          label: 'Transaction Amount',
          data: [expense, income],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: .5,
        },
      ],
    }} />
  </>
  );
};

export default IncomeExpensePieChart;