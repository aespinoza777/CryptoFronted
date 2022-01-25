const accountsReducer = (state = { accounts: []}, action) => {
    switch(action.type) {
        case "ADD_ACCOUNT": 
            return {
                accounts: [...state.accounts, action.account]
            }
        case "SET_ACCOUNTS": 
            return {
                accounts: action.accounts
            }
        case "UPDATE_ACCOUNT":
            const accounts = state.accounts.map(account => account.id === action.account.id ? action.account : account)
            return {
                accounts: accounts
            }
        default:
            return state

    }
}

export default accountsReducer