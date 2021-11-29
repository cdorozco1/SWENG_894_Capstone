// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file contains the source code for the main application
// This project is a work in progress

// React and axios imports
import React/*, {useState, useEffect}*/ from 'react';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
//import {axios} from 'axios';

// BAE component imports
import {Home} from './components/Home';
import Dashboard from './components/Dashboard';
import Charts from './components/Charts';

// Styling import
import './styling/styles.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <div className = "header">
            <NavLink exact activeClassName = "active" to="/">Home</NavLink>
            <NavLink activeClassName ="active" to="/dashboard">Dashboard</NavLink>
            <NavLink activeClassName ="active" to="/charts">Charts</NavLink>
          </div>
          <div className ="content">
            <Switch>
              <Route exact path ="/" component = {Home} />
              <Route path ="/dashboard" component = {Dashboard} />
              <Route path ="/charts" component ={Charts}/>
            </Switch>
          </div>
        </div>      
      </BrowserRouter>
    </div>
  );
}

export default App;
