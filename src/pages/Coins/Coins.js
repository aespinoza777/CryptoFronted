import React from "react"
import {connect} from "react-redux"
import Coin from "./Coin"
class Coins extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: "0",
            
        

        }
    }

    handleChange = event=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        console.log(this.props.coins)
        return (
            <React.Fragment>
                 <label>Coin</label>
                 <input type="number" name="count" onChange={this.handleChange} value={this.state.count}/>
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