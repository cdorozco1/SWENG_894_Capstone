// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the source code for the Expense pie chart component

import React from 'react';
import { Pie } from 'react-chartjs-2';
import TotalExpCategory from '../../helperfns/TotalExpCategory';

const ExpensesPieChart = () => {

  // Get the transaction amounts for each expense category
  const eatingOut = TotalExpCategory("Eating Out");
  const entertainment = TotalExpCategory("Entertainment");
  const groceries = TotalExpCategory("Groceries");
  const housing = TotalExpCategory("Housing");
  const insurance = TotalExpCategory("Insurance");
  const loans = TotalExpCategory("Loans");
  const other = TotalExpCategory("Other");
  const transportation = TotalExpCategory("Transportation");
  const utilities = TotalExpCategory("Utilities");

  // Console logging for debug
  console.log("Eating out amount, $",eatingOut);
  console.log("Entertainment amount, $",entertainment);
  console.log("Groceries amount, $",groceries);
  console.log("Housing amount, $",housing);
  console.log("Insurance amount, $",insurance);
  console.log("Loan amount, $",loans);
  console.log("Other amount, $",other);
  console.log("Transportation amount, $",transportation);
  console.log("Utilities amount, $",utilities);

  return(
    // Render the pie chart with above categories
    <>
      <div className='header'>
        <h5 className='title'>Expenses Pie Chart</h5>
      </div>
      <Pie 
      data={{
        labels: ['Eating Out', 'Entertainment', 'Groceries', 'Housing', 'Insurance', 'Loans', 'Other', 'Transportation', 'Utilities'],
        datasets: [
          {
            label: 'Expense Categories',
            data: [eatingOut, entertainment, groceries, housing, insurance, loans, other, transportation, utilities],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(200, 87, 200, 0.2)',
              'rgba(38, 244, 43, 0.2)',
              'rgba(217, 160, 60, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(200, 87, 200, 0.2)',
              'rgba(50, 22, 0, 0.2)',
              'rgba(140, 111, 155, 0.2)',
            ],
            borderWidth: 1,
          },
        ],
      }} />
    </>
    );
  };

export default ExpensesPieChart;