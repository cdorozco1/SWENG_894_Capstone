// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the source code for the backend routes

// Imports/dependencies
const express = require('express');
const router = express.Router();
const {getTransactions, addTransaction, deleteTransaction} = require('../controllers/transactionController');

router
    .route('/')
    .get(getTransactions)
    .post(addTransaction);

router
    .route('/:id')
    .delete(deleteTransaction);
    
module.exports = router;

