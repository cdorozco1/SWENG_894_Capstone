// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides the source code for user authentication in the server

// Import/dependencies
var jwt = require('jsonwebtoken');
 
// Generates a token and returns the token
function generateToken(user) {

  if (!user) return null;
 
  var u = {
    uid: user.uid,
    name: user.name,
    username: user.username,
    isAdmin: user.isAdmin
  };
 
  return jwt.sign(u, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 2 // expires in 2 hours
  });
}
 
// Get the user info
function getUserInfo(user) {
  if (!user) return null;
 
  return {
    uid: user.uid,
    name: user.name,
    username: user.username,
    isAdmin: user.isAdmin
  };
}
 
// Exports
module.exports = {
  generateToken,
  getUserInfo
}