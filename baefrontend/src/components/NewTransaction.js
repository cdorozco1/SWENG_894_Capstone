// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the source code for adding a new transaction

import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const NewTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
    e.preventDefault();

        const newTransaction = {
            uid: Math.floor(Math.random()*100000000),
            text,
            amount: parseInt(amount)
            }

        addTransaction(newTransaction);     
    }

    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Transaction Title</label>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter description..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
                <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            <button className="btn">Add Transaction</button>
            </form>
        </>
    );
}
