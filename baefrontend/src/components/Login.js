// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the source code for the Login Form component

import axios from 'axios';
import React, { useState } from 'react';
import {setUserSession} from './utilities/Session';

function Login(props){
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // On login button click, handle the login
  const clickLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:5000/users/signin', {username: username.value, password:password.value}).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/dashboard');
    }).catch(error =>{
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError ("Unknown error. Please try later");
    });
  }

  return (
    <div>
      Login <br /><br />
      <div>
        Username <br />
        <input type ="text" {...username} autoComplete= "new-password" />
      </div>
      <div style ={{marginTop:10}}>
        Password <br />
        <input type = "password" {...password} autoComplete = "new-password" />
      </div>
      {error && <><small style ={{ color: 'red'}}>{error}</small><br /></>}<br />
      <input type = "button" value ={loading ? 'Loading' : 'Login'} onClick = {clickLogin} disabled = {loading} /> <br />
    </div>
  );
};

const useFormInput = initialValue => {
  const [value, setValue] = useState (initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }

  return {
    value,
    onChange:handleChange
  };
};

export default Login;