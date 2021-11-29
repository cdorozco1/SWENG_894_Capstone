// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This project is a work in progress
// The following is a very simple unit test to verify the header of BAE is rendered

import React from 'react'
import { Home } from '../components/Header'
import {render} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

test("Home renders with correct info", () =>{
    //Render the header
    const component =render(<Home/>);
    const headerElement = component.getByTestId("home");

    //Verify the header displays the proper text.
    expect(headerElement.textContent).toBe("Welcome to the Budgeting and Expense, or BAE, Application Home Page!");
})