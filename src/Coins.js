import React from "react"
import {connect} from "react-redux"
import Coin from "./Coin"
class Coins extends React.Component {
    render(){
        console.log(this.props.coins)
        return (
            <React.Fragment>
                <h1>coins</h1>
                {this.props.coins.map(coin => <Coin key={coin.id} coin={coin}/>)}
            </React.Fragment>
            )
    }
   

}

const mapStateToProps = state => {
    return {
        coins: state.coins.coins
    }
}

export default connect(mapStateToProps, null)(Coins)