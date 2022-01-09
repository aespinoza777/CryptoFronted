const coinsReducer = (state = { coins: []}, action) => {
    switch(action.type) {
        case "FETCH_COINS": 
            return {
                coins: action.coins 
            }
        default:
            return state

    }
}

export default coinsReducer