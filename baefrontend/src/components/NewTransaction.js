// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the source code for adding a new transaction

import React, {useState} from 'react'

export const NewTransaction = () => {
    const [text, setText] = useState('');
    const [amt, setAmt] = useState(0);
    return (
        <>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} 
                    placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input type="number" value={text} onChange={(e)=>setAmt(e.target.value)}
                placeholder="Enter amount..." />
            </div>
            <button className="btn">Add Transaction</button>
            </form>
        </>
    );
}
