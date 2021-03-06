// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the source code for the dashboard component

// Imports
import React from 'react';
// import {removeUserSession} from './utilities/Session';

// BAE GUI components
import {Header} from './Header';
import {Balance} from './Balance'
import {NetIncome} from './NetIncome'
import {TransactionList} from './TransactionList'
import {NewTransaction} from './NewTransaction'
import {GlobalProvider} from '../context/GlobalState'

function Dashboard(){
    return (
        <GlobalProvider>
        <Header />
         <div className="container">
          <Balance/>
          <NetIncome/>
          <TransactionList/>
          <NewTransaction/>
         </div>
        </GlobalProvider>
    );
}

export default Dashboard;