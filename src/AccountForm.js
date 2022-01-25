import React from "react"
import {connect} from "react-redux"
import {createAccount} from './redux/actions/accountActions'

class AccountForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            exchange_id: "",
            coin_id: "",
            coin_quantity: 0,

        }
    }

    handleChange = event=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)
        this.props.createAccount(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Exchange</label>
                <select name="exchange_id" onChange={this.handleChange}>
                    <option></option>
                    {this.props.exchanges.map(exchange => <option value={exchange.id} key={exchange.id} >{exchange.name}</option>)}
                </select>
                <label>Coin</label>
                <select name="coin_id" onChange={this.handleChange}>
                <option></option>
                    {this.props.coins.map(coin => <option value={coin.id} key={coin.id} >{coin.ticker}</option>)}
                </select>
                <label>Coin Quantity</label>
                <input type="number" name="coin_quantity" onChange={this.handleChange}/>
                <input type="submit" value="Add Coins"/>
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
        createAccount: (account) => dispatch(createAccount(account))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AccountForm)