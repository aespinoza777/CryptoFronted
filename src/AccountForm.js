import React from "react"
import {connect} from "react-redux"

class AccountForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            exchange_id: "",
            coin_id: "",
            coin_quantity: 0,

        }
    }

    render() {
        return (
            <form>
                <label>Exchange</label>
                <select name="exchange_id">
                    {this.props.exchanges.map(exchange => <option value={exchange.id} key={exchange.id} >{exchange.name}</option>)}
                </select>
                <label>Coin</label>
                <select name="coin_id">
                    {this.props.coins.map(coin => <option value={coin.id} key={coin.id} >{coin.ticker}</option>)}
                </select>
            </form>
        )
    }
}



const mapStateToProps = state => {
    return {
        exchanges: state.coinExchanges.exchanges,
        coins: state.coins.coins
    }
}

const mapDispatchToProps =  dispatch => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AccountForm)