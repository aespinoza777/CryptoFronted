const coinExchangesReducer = (state = { coinExchanges: [], exchanges: []}, action) => {
    switch(action.type) {
        case "FETCH_EXCHANGES": 
        return {
            exchanges: action.exchanges
        }
    default:
        return state

}
}

export default coinExchangesReducer;