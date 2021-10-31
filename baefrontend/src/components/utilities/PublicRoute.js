// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the source code for private routes in BAE

import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {getToken} from './Session';

function PublicRoute({component: Component, ...rest}){
    return(
        <Route
        {...rest}
        render={(props) => !getToken() ? <Component {...props} /> : <Redirect to ={{ pathname: '/dashboard'}}/>}
        />
    )
}

export default PublicRoute;