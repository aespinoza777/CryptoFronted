export const fetchExchanges = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/exchanges')
        .then(res => res.json())
        .then(exchanges => dispatch({type: "FETCH_EXCHANGES", exchanges: exchanges}))

    }

}