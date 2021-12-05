// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the the source code for the New Transaction component

// Imports
import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import 'bootstrap/dist/css/bootstrap.css';

export const NewTransaction = () => {
    // Define functions for transaction details
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0.0);
    const [transtype, setTranstype] = useState('');
    const [date, setDate] = useState('');

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
    e.preventDefault();

    // Define function for adding new transaction
    const newTransaction = {
        // Generate random number for id
        id: Math.floor(Math.random()*1000000),
        // Set to income if greater than 0, expense if less than 0
        income: parseInt(amount)>0 ? "Income" : "Expense",
        // Name of transaction
        text,
        // Category of transaction
        transtype,
        // Date of transaction
        date,
        // Amount of transaction
        amount: +amount
        }

        addTransaction(newTransaction);     
    }

    // Define the dropdown for transaction type
    const options = [
        {
          label: "",
          value: "",
        },
        {
          label: "Expense - Eating Out",
          value: "Eating Out",
        },
        {
          label: "Expense - Entertainment",
          value: "Entertainment",
        },
        {
          label: "Expense - Groceries",
          value: "Groceries",
        },
        {
          label: "Expense - Housing",
          value: "Housing",
        },
        {
          label: "Expense - Insurance",
          value: "Insurance",
        },
        {
          label: "Expense - Loans",
          value: "Loans",
        },
        {
          label: "Expense - Other",
          value: "Other",
        },
        {
          label: "Expense - Transportation",
          value: "Transportation",
        },
        {
          label: "Expense - Utilities",
          value: "Utilities",
        },
        {
          label: "Income - Bonuses",
          value: "Bonuses",
        },
        {
          label: "Income - Gifts",
          value: "Gifts",
        },
        {
          label: "Income - Investments",
          value: "Investments",
        },
        {
          label: "Income - Other",
          value: "Other",
        },
        {
          label: "Income - Paycheck",
          value: "Paycheck"
        }
      ];
    return (
        <>
            <h3 data-testid = "header">
                Add New Transaction
            </h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Transaction Title<br />(Enter a title for the transaction)</label>
                    <input data-testid="text" type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter description..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />(Negative for expense, positive for income)</label>
                    <input data-testid = "amount" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <div className="form-control">
                    <label htmlFor="transtype">Transaction Type <br />(Enter category of the transaction)</label>
                    <br /><select data-testid="transtype" type="text" value={transtype} onChange={(e)=>setTranstype(e.target.value)} placeholder="Enter type...">
                    {options.map((option) => (<option value={option.value}>{option.label}</option>))}
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor="date">Transaction Date <br />(Enter date of the transaction)</label>
                    <input data-testid = "date" type="date" value={date} onChange={(e)=>setDate(e.target.value)} placeholder="Enter date..." />
                </div>
                <button data-testid="addTransBtn" className="btn">Add Transaction</button>
            </form>
        </>
    );
}
