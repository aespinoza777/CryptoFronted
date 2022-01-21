const setToken = token => {
localStorage.setItem("token", token)


}
export const signUpUser = (user) => {

return (dispatch) => {
    return fetch("http://localhost:3000/users", {
        method: "POST", 
        headers: {
            accept: "application/json", 
            "content-type": "application/json"
        },
        body: JSON.stringify({
            user: user

        })
    })
    .then(response => response.json())
    .then(user => {
        setToken(user.token)
        dispatch({type: "SET_USER", user: user})
    })
}

}

export const loginUser = (user) => {

    return (dispatch) => {
        return fetch("http://localhost:3000/sessions", {
            method: "POST", 
            headers: {
                accept: "application/json", 
                "content-type": "application/json"
            },
            body: JSON.stringify({
                user: user
    
            })
        })
        .then(response => response.json())
        .then(user => {
            setToken(user.token)
            dispatch({type: "SET_USER", user: user})
        })
    }
    
    }


    export const checkAuth = () => {

        return (dispatch) => {
            return fetch("http://localhost:3000/current_user", {
                headers: {
                    accept: "application/json", 
                    "content-type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                
        
               
            })
            .then(res => {
                if (res.ok) {
                    return res.json().then(user => {
                        dispatch({type: "SET_USER", user: user})
                    })
                }
                else {
                    dispatch({type: "LOGOUT_USER"})
                }
            })
        }
        
        }