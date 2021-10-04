// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This project is a work in progress
// The following contains the tests for NewTransaction

//imports
import React from 'react'
import { NewTransaction } from '../components/NewTransaction'
import {render, fireEvent} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

test("App renders the new transaction section, UT-002", () =>{
    //Render the new Ttransaction and get the header
    const component =render(<NewTransaction/>);
    const headerElement = component.getByTestId("header");

    //Verify the header of the new transaction section is present
    expect(headerElement.textContent).toBe("Add New Transaction");
})

test("User can enter data for transaction text,  UT-003", () =>{
    //Render the new Transaction and get the text
    const component =render(<NewTransaction/>);
    const textEl = component.getByTestId("text");

    //Fire an event for adding text of Paycheck to add transaction
    fireEvent.change(textEl, {
        target:{
            value: "Paycheck"
        }
    });

    expect(textEl.value).toBe("Paycheck");
})

test("User can enter data for amount (negative values), UT-004", () =>{
    //Render the new Transaction and get the text
    const component =render(<NewTransaction/>);
    const amountEl = component.getByTestId("amount");

    //Fire an event for adding amount of -800.5 to add transaction
    fireEvent.change(amountEl, {
        target:{
            value: "-800.5"
        }
    });

    //Assert amount is -800.5
    expect(amountEl.value).toBe("-800.5");
})

test("User can enter data for amount (positive values), UT-005", () =>{
    //Render the new Transaction and get the text
    const component =render(<NewTransaction/>);
    const amountEl = component.getByTestId("amount");

    //Fire an event for adding amount of 500.5 to add transaction
    fireEvent.change(amountEl, {
        target:{
            value: "500.5"
        }
    });

    //Assert amount is 500.5
    expect(amountEl.value).toBe("500.5");
})

test("User can enter data for transaction type, UT-006", () =>{
    //Render the new transaction component and get the text
    const component =render(<NewTransaction/>);
    const transtypeEl = component.getByTestId("transtype");

    //Fire an event for adding transaction type of income to add transaction
    fireEvent.change(transtypeEl, {
        target:{
            value: "Income"
        }
    });

    //Assert type is income
    expect(transtypeEl.value).toBe("Income");
})

test("User can enter data for date, UT-007", () =>{
    //Render the new Transaction and get the text
    const component =render(<NewTransaction/>);
    const dateEl = component.getByTestId("date");

    //Fire an event for adding a transaction date of 2021-11-05
    fireEvent.change(dateEl, {
        target:{
            value: "2021-11-05"
        }
    });

    expect(dateEl.value).toBe("2021-11-05");
})

test("User can't enter invalid date, UT-008", () =>{
    //Render the new Transaction and get the text
    const component =render(<NewTransaction/>);
    const dateEl = component.getByTestId("date");

    //Fire an event for adding an invalid transaction date of ABC
    fireEvent.change(dateEl, {
        target:{
            value: "ABC"
        }
    });

    expect(dateEl.value).toBe("");
})

// test("User presses add transaction button and a transaction is added, IT-002", () =>{
//     //Render the new Transaction and get the text
//     const component =render(<NewTransaction/>);
//     const textEl = component.getByTestId("text");
//     const transtypeEl = component.getByTestId("transtype");
//     const amountEl = component.getByTestId("amount");
//     const dateEl = component.getByTestId("date");
//     const addTransBtn = component.getByTestId("addTransBtn")

//     //Fire events for adding transaction info
//     fireEvent.change(textEl, {
//         target:{
//             value: "Car parts"
//         }
//     });

//     fireEvent.change(amountEl, {
//         target:{
//             value: "-285.5"
//         }
//     });

//     fireEvent.change(transtypeEl, {
//         target:{
//             value: "Leisure"
//         }
//     });

//     fireEvent.change(dateEl, {
//         target:{
//             value: "2021-11-05"
//         }
//     });

//     fireEvent.click(addTransBtn);
// })



