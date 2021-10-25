// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This project is a work in progress

// React Imports
import React, {useState} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// BAE component imports
import {Dashboard} from './components/Dashboard';
import Login from './components/Login';

// Styling import
import './styling/styles.css'

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  };

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route>
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
