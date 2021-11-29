// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This project is a work in progress
// The following contains tests for the charts page

import React from 'react'
import Dashboard  from '../components/Dashboard'
import {render} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

test("Dashboard renders, UT18", () =>{
    //Render the header
    const component =render(<Dashboard/>);

})