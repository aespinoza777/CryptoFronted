import React from "react"
import {connect} from "react-redux"
import Exchange from "../Exchange"

const Exchanges = (props) => {
    return (
        <React.Fragment>
           <h1>Exchanges</h1>
            {props.exchanges.map(exchange => <Exchange key={exchange.id} exchange={exchange}/>)}
        </React.Fragment>
    )

}

const mapStateToProps = state => {
    return {
        exchanges: state.coinExchanges.exchanges
    }
}

export default connect(mapStateToProps, null)(Exchanges)

