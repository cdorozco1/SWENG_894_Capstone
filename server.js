// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the functionality for the backend server

// Imports/dependencies
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/database');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
// const users = require('./Users');

// Dotenv path
dotenv.config({path: './config/config.env'});

// Connect to the db
connectDB();

const transactions = require('./routes/transactions');

const app = express();

if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
};


app.use('/api/v1/transactions', transactions);

app.use(express.json());

// // static user details
// const userCredentials = {
//   uid: "789789",
//   password: "TestPassword!",
//   name: "David Orozco",
//   username: "PsuSweng21",
//   isAdmin: true
// };

// // enable CORS
// app.use(cors());
// // parse application/json
// app.use(bodyParser.json());
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));
 
 
// //middleware that checks if JWT token exists and verifies it if it does exist.
// //In all future routes, this helps to know if the request is authenticated or not.
// app.use(function (req, res, next) {
//   // check header or url parameters or post parameters for token
//   var token = req.headers['authorization'];
//   if (!token) return next(); //if no token, continue
 
//   token = token.replace('Bearer ', '');
//   jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
//     if (err) {
//       return res.status(401).json({
//         error: true,
//         message: "Invalid user."
//       });
//     } else {
//       req.user = user; //set the user to req so other routes can use it
//       next();
//     }
//   });
// });
 
 
// // request handlers
// app.get('/', (req, res) => {
//   if (!req.user) return res.status(401).json({ success: false, message: 'Invalid user to access it.' });
//   res.send('Welcome to the Node.js Tutorial! - ' + req.user.name);
// });
 
 
// // validate the user credentials
// app.post('/users/signin', function (req, res) {
//   const user = req.body.username;
//   const pwd = req.body.password;
 
//   // return 400 status if username/password is not exist
//   if (!user || !pwd) {
//     return res.status(400).json({
//       error: true,
//       message: "Username or Password required."
//     });
//   }
 
//   // return 401 status if the credential is not match.
//   if (user !== userCredentials.username || pwd !== userCredentials.password) {
//     return res.status(401).json({
//       error: true,
//       message: "Username or Password is Wrong."
//     });
//   }
 
//   // generate token
//   const token = users.generateToken(userCredentials);
//   // get basic user details
//   const userObj = users.getCleanUser(userCredentials);
//   // return the token along with user details
//   return res.json({ user: userObj, token });
// });
 
// // verify the token and return it if it's valid
// app.get('/verifyToken', function (req, res) {
//   // check header or url parameters or post parameters for token
//   var token = req.body.token || req.query.token;
//   if (!token) {
//     return res.status(400).json({
//       error: true,
//       message: "Token is required."
//     });
//   }
//   // check token that was passed by decoding token using secret
//   jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
//     if (err) return res.status(401).json({
//       error: true,
//       message: "Invalid token."
//     });
 
//     // return 401 status if the uid does not match.
//     if (user.uid !== userCredentials.uid) {
//       return res.status(401).json({
//         error: true,
//         message: "Invalid user."
//       });
//     }
//     // get basic user details
//     var userObj = users.getCleanUser(userCredentials);
//     return res.json({ user: userObj, token });
//   });
// });

// Configure port number and listen
const PORT = process.env.port || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

module.exports = app;
