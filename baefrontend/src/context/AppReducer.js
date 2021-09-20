// Prepared by: David Orozco
// The following is the source code for the Budgeting and Expense App, or BAE
// This project is a work in progress

export default (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transaction: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        default:
            return state;
    }
}