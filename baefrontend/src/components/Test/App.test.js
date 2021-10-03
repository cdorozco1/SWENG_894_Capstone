// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This file provides tests for App.js

import { App } from './App'

const App = just.fn();

// Unit tests
test ('App UT', ()=>{
 expect(App).toHaveBeenCalledTimes(1);
})