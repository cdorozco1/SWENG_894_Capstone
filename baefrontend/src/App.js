// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file contains the source code for the main application
// This project is a work in progress

// React and axios imports
import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import {axios} from 'axios';

// BAE component imports
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

// Public/private route imports
import PrivateRoute from './components/utilities/PrivateRoute';
import PublicRoute from './components/utilities/PublicRoute';

// Session management imports
import {getToken, removeUserSession, setUserSession} from './components/utilities/Session'

// Styling import
import './styling/styles.css'

function App() {
  const [authLoading, setAuthLoading] = useState(true);
  // Get the token
  useEffect (() =>{
    const token = getToken();
    if(!token) {
      return;
    }
    
    axios.get(`http://localhost:8080/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className = "content">Verifying Authentication...</div>
  }

  return (
    <div>
      <BrowserRouter>
        <div>
          <div className = "header">
            <NavLink exact activeClassName = "active" to="/">Home</NavLink>
            {/* <NavLink activeClassName ="active" to="/login">Login</NavLink> */}
            <NavLink activeClassName ="active" to="/dashboard">Dashboard</NavLink>
          </div>
          <div className ="content">
            <Switch>
              <Route exact path ="/" component = {Home} />
              {/* <Route path ="/login" component = {Login} /> */}
              <Route path ="/dashboard" component = {Dashboard} />
            </Switch>
          </div>
        </div>      
      </BrowserRouter>
    </div>
  );
}

export default App;
