// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This project is a work in progress
// The following contains tests for the charts page

import React from 'react'
import Charts  from '../components/Charts'
import {render} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

test("Header renders with correct test", () =>{
    //Render the header
    const component =render(<Charts/>);

})