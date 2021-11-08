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
// const users = require('./users/Users');

// Dotenv path
dotenv.config({path: './config/config.env'});

// Connect to the db
connectDB();
const transactions = require('./routes/transactions');
const app = express();

app.use(express.json());
app.use('/api/v1/transactions', transactions);

// Static user credentials
// const userCredentials = {
//   uid: "7777",
//   password: "Test123",
//   name: "David Orozco",
//   username: "PsuSweng",
//   isAdmin: true
// };

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
 

// Verify a Json Web Token exists/does not exist. Used to protect secured routes in app

// app.use(function (req, res, next) {
//   // Check for token. Continue if there is not a token.
//   var token = req.headers['authorization'];
//   if (!token) return next();
 
//   token = token.replace('Bearer ', '');
//   jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
//     if (err) {
//       return res.status(401).json({
//         error: true,
//         message: "Invalid user."
//       });
//     } else {
//       req.user = user; // Set user to request user so protected routes can be accessed.
//       next();
//     }
//   });
// });
 
 
// // Req Handler
// app.get('/', (req, res) => {
//   if (!req.user) return res.status(401).json({ success: false, message: 'User does not have access' });
//   res.send('User validated, welcome ' + req.user.name);
// });
 
 
// // Validate credentials
// app.post('/users/signin', function (req, res) {
//   const user = req.body.username;
//   const pwd = req.body.password;
 
//   // Return 400 status if username or password doesn't exist
//   if (!user || !pwd) {
//     return res.status(400).json({
//       error: true,
//       message: "Username and password required"
//     });
//   }
 
//   // Return 401 status if username or password don't match credentials
//   if (user !== userCredentials.username || pwd !== userCredentials.password) {
//     return res.status(401).json({
//       error: true,
//       message: "Username or password do not match authorized credentials."
//     });
//   }
 
//   // Generate a JWT token
//   const token = users.generateToken(userCredentials);
//   // Get the user info
//   const userObj = users.getUserInfo(userCredentials);
//   // Return the token and user info
//   return res.json({ user: userObj, token });
// });
 
// // Verify token and return the token if its valid
// app.get('/verifyToken', function (req, res) {
//   // Check for token
//   var token = req.body.token || req.query.token;
//   if (!token) {
//     return res.status(400).json({
//       error: true,
//       message: "Token is required."
//     });
//   }
//   // Check token validity
//   jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
//     if (err) return res.status(401).json({
//       error: true,
//       message: "Invalid token."
//     });
 
//     // Checker user ID matches user credentials
// //     if (user.uid !== userCredentials.uid) {
//       return res.status(401).json({
//         error: true,
//         message: "Invalid user."
//       });
//     }
//     // Get the user info and return it
//     var userObj = users.getUserInfo(userCredentials);
//     return res.json({ user: userObj, token });
//   });
// });

// Configure port number and listen
const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('baefrontend/build'));
} else {
  app.use(morgan('dev'));
}

module.exports = app;
