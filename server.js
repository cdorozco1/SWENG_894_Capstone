// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the functionality for the backend server

// Imports/dependencies
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/database')

// Dotenv path
dotenv.config({path: './config/config.env'});

// Connect to the db
connectDB();

const transactions = require('./routes/transactions');

const app = express();

if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/transactions', transactions);

const PORT = process.env.port || 5000;

// Listen on the port. Used during development
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

// Export app. Used during testing
 module.exports = app;


