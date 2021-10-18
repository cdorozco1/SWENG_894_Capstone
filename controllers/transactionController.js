// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the source code for the backend transaction controller

// Imports/dependencies
const Transaction = require('../models/Transaction')

// Desc     Gets all transactions
// Route    GET /api/v1/transactions
// Access   Public
exports.getTransactions = async(req, res, next) => {
    try{
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch(err){
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// Desc     Add transaction
// Route    POST /api/v1/transactions
// Access   Public
exports.addTransaction = async(req, res, next) => {
    try{
        // Define body as the transaction info
        const {income, text, transtype, date, amount} = req.body;

        // Create transaction request body
        const transaction = await Transaction.create(req.body);
        
        // Return response
        return res.status(201).json({
            success: true,
            data: transaction
        });
    }catch (err) {
        if(err.name === 'ValidationError') {
          const messages = Object.values(err.errors).map(val => val.message);
    
          return res.status(400).json({
            success: false,
            error: messages
          });
        } else {
          return res.status(500).json({
            success: false,
            error: 'Server Error'
          });
        }
      }
    }

// Desc     Delete transaction
// Route    DELETE /api/v1/transactions/:id
// Access   Public
exports.deleteTransaction = async(req, res, next) => {
    try{
        // If transaction isn't found, return an error
        const transaction = await Transaction.findById(req.params.id);
        if(!transaction){
            return res.status(404).json({
                success: false,
                error: 'No transaction found'
            });
        }
        // Remove transaction
        await transaction.remove();
        return res.status(200).json({
            success: true,
            data: {}
        });
    } catch(err){
        return res.status(500).json({
            success: false,
            error: 'Server Error'
          });
    }
}