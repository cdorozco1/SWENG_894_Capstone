// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the source code for the backend transactions model

const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    income:{
        type: String,
        trim: true,
        required: [true, 'Please add income/expense']
    },
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add transaction text']
    },
    transtype:{
        type: String,
        trim:true,
        required: [true, 'Please add transaction type']
    },
    amount: {
        type: Number,
        required: [true, 'Please add transaction amount']
    },
    date:{
        type: Date,
        required: [true, 'Please add transaction date']
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);