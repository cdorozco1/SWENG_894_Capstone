// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This project is a work in progress

// Imports
//import React, { useState } from 'react'
import Home from './Home'
//import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
//import LoginForm from './components/Login/LoginForm';


function App() {

  /*
  // Define login email and pw. Temp
  const adminUser = {
    email: "admin@google.com",
    password: "admin"
  }

  const [user, setUser] = useState({name:"",email:""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");
      setUser({
        name:"David",
        email:details.email
      });
    } else{
      console.log("Invalid login");
      setError("Invalid Login");
    } 

  }

  const Logout = () => {
    console.log("Logout;")
    setUser({name:"",email:""})
  }
*/
  return (
       /*<Router>
        <div className="App">
           {(user.email != "") ? (
             <div className = "welcome">
            <h2>Welcome, <span> {user.name}</span></h2> 
            <button onClick = {Logout}>Logout</button>
            </div>
          ) : (
          <LoginForm Login={Login} error={error}/>
          )}
        </div>*/
        <div className ="home">
          <Home Home/>
        </div>
       

  );
}

export default App;
