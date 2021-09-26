// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This project is a work in progress

// Imports
import React from 'react'
// Styling
import './styles.css'
// BAE GUI components
import {Header} from './components/Header';
import {Balance} from './components/Balance'
import {NetIncome} from './components/NetIncome'
import {TransactionList} from './components/TransactionList'
import {NewTransaction} from './components/NewTransaction'
import {GlobalProvider} from './context/GlobalState'

//import {BrowserRouter, Route, Switch} from 'react-router-dom';
//import Dashboard from './components/Dashboard/Dashboard';
//import Preferences from './components/Preferences/Preferences';

function Home() {
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

export default Home;
