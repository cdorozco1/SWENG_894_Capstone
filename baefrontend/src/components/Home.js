// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the source code for the home component in BAE.

import React from 'react';

export const Home = () => {
    return(
    <>
        <h2 data-testid = "home">Welcome to the Budgeting and Expense Application Home Page!</h2>
        <h5 data-testid = "appuse"><br/>This application is used for tracking financial transactions - income and expenses</h5>
        <h5 data-testid = "dashinfo"><br/>Navigate to the Dashboard page to view and add transactions</h5>
        <h5 data-testid = "chartinfo"><br/>Navigate to the Charts page to view transaction analytics</h5>
    </>
    )
}
