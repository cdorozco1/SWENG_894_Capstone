// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This project is a work in progress

import React from 'react'
import './styles.css'
import { Header } from './components/Header';
import {Balance} from './components/Balance'
import {NetIncome} from './components/NetIncome'
import {TransactionList} from './components/TransactionList'
import {NewTransaction} from './components/NewTransaction'
import {GlobalProvider} from './context/GlobalState'


function App() {
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

export default App;
