// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This project is a work in progress
// The following is a very simple unit test to verify the header of BAE is rendered

import React from 'react'
import { Header } from '../components/Header'
import {render} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

test("Header renders successfully", () =>{
    //Render the header
    const component =render(<Header/>);
    const headerElement = component.getByTestId("header");

    //Verify the header displays the proper text.
    expect(headerElement.textContent).toBe("Budgeting And Expense Application - Dashboard");
})