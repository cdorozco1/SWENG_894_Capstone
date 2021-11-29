// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This project is a work in progress
// The following contains the tests for TransactionList

//imports
import React from 'react'
import { TransactionList } from '../components/TransactionList'
import {render, fireEvent} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

test("App renders transaction list successfully, UT-009", () =>{
    //Render the TransactionList and get the header
    const component =render(<TransactionList/>);

})