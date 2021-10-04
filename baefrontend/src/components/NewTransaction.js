// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the source code for adding a new transaction

// Imports
import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


export const NewTransaction = () => {

    // Define functions for transaction details
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
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
        amount: parseInt(amount)
        }

        addTransaction(newTransaction);     
    }

    return (
        <>
            <h3 data-testid = "header">
                Add New Transaction
            </h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Transaction Title</label>
                    <input data-testid="text" type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter description..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />(Negative for expense, positive for income)</label>
                <input data-testid = "amount" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            <div className="form-control">
                    <label htmlFor="transtype">Transaction Type <br />(Enter category of the transaction)</label>
                <input data-testid="transtype" type="text" value={transtype} onChange={(e)=>setTranstype(e.target.value)} placeholder="Enter type..." />
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
