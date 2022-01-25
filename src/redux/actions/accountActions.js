const getToken = () => {
    return localStorage.getItem("token")
    
}

export const createAccount = (account) => {

    return (dispatch) => {
        return fetch("http://localhost:3000/accounts", {
            method: "POST", 
            headers: {
                accept: "application/json", 
                "content-type": "application/json",
                "Authorization": `Bearer ${getToken()}`
            },
            body: JSON.stringify({
                account: account
    
            })
        })
        .then(response => response.json())
        .then(account => {
            dispatch({type: "ADD_ACCOUNT", account: account})
        })
        
    }
    
}

export const fetchAccounts = () => {

    return (dispatch) => {
        return fetch("http://localhost:3000/accounts", {
            headers: {
                accept: "application/json", 
                "content-type": "application/json",
                "Authorization": `Bearer ${getToken()}`
            },
        })
        .then(response => response.json())
        .then(accounts => {
            dispatch({type: "SET_ACCOUNTS", accounts: accounts})
        })
    }
}

export const updateAccount = (account) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/accounts/${account.id}`, {
            method: "PATCH", 
            headers: {
                accept: "application/json", 
                "content-type": "application/json",
                "Authorization": `Bearer ${getToken()}`
            },
            body: JSON.stringify({
                account: account
    
            })
        })
        .then(response => response.json())
        .then(account => {
            dispatch({type: "UPDATE_ACCOUNT", account: account})
        })
    }
    
}