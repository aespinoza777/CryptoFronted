import React from 'react';
import {connect} from 'react-redux';
import Account from './Account'
import './Account.css'

const Accounts = (props) => {
    let groupedExchanges = {}
    props.accounts.forEach(account => {
        let key = account.exchange.name
        if (!groupedExchanges[key]) {
            groupedExchanges[key] = []
        }

        groupedExchanges[key].push({
            id: account.id, 
            name: account.exchange.name,
            ticker: account.coin.ticker,
            coin_quantity: account.coin_quantity,
            amount: account.price
        })
    })
    console.log(groupedExchanges)
        return (
            <React.Fragment>
                <h1>My Accounts</h1>
                {Object.keys(groupedExchanges).map(exchange => {
                    return (
                        <React.Fragment>
                            <h2>{exchange}</h2>
                            {groupedExchanges[exchange].map(account => <Account key={account.id} account={account}/>)}
                            </React.Fragment>
                    )
                })}
               


            </React.Fragment>
        )


}

const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts
    }
}


export default connect(mapStateToProps, null)(Accounts)