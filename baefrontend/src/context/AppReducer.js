// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This project is a work in progress

// eslint-disable-next-line
export default (state, action) => {
    switch(action.type){
        case 'GET_TRANSACTIONS':
            return{
                ...state,
               loading:false,
               transactions:action.payload 
            }
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        case 'TRANSACTION_ERROR':
            return{
                ...state,
                error:action.payload
            }    
        default:
            return state;
    };
};