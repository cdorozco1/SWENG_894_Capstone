// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the source code for the Income vs Expense Pie Chart component

import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['Expense', 'Income'],
  datasets: [
    {
      label: 'Transaction Amount',
      data: [50,50],
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
};

const IncomeExpensePieChart = () => (
  <>
    <div className='header'>
      <h2 className='title'>Income vs Expense Pie Chart</h2>
    </div>
    <Pie data={data} />
  </>
);

export default IncomeExpensePieChart;