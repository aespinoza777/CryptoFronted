export const fetchCoins = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/coins')
        .then(res => res.json())
        .then(coins => dispatch({type: "FETCH_COINS", coins: coins}))

    }

}