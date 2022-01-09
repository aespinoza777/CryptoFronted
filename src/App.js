
import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./Home"
import NavBar from "./NavBar"
import React from 'react';
import {connect} from "react-redux"
import {fetchCoins} from './redux/actions/coinActions.js'
import Coins from "./Coins"

class App extends React.Component {
  componentDidMount(){
    this.props.fetchCoins()
     //setInterval(this.props.fetchCoins, 10000)   
  }
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar/>
          <Switch>
            <Route path="/" exact component={Home}/> 
            <Route path="/coins" exact component={Coins}/>
          
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCoins: () => dispatch(fetchCoins())
  }
}
export default  connect(null,mapDispatchToProps)(App);
