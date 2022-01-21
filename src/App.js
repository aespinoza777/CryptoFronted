
import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./Home"
import NavBar from "./NavBar"
import React from 'react';
import {connect} from "react-redux"
import {fetchCoins} from './redux/actions/coinActions.js'
import Coins from "./Coins"
import SignUp from "./SignUp"
import Login from "./Login"
import Exchanges from './Exchanges';
import { fetchExchanges } from './redux/actions/exchangeActions';
import {loginUser, checkAuth} from './redux/actions/authActions.js'
import MyAccount from './MyAccount';


class App extends React.Component {
  componentDidMount(){
    this.props.fetchCoins()
    this.props.fetchExchanges()
    this.props.checkAuth()
     setInterval(this.props.fetchCoins, 300000)   
  }
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar/>
          <Switch>
            <Route path="/" exact component={Home}/> 
            <Route path="/coins" exact component={Coins}/>
            <Route path="/sign_up" exact component={SignUp}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/exchanges" exact component={Exchanges}/>
            <Route path="/my_account" exact component={MyAccount}/>


          </Switch>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCoins: () => dispatch(fetchCoins()),
    fetchExchanges: () => dispatch(fetchExchanges()),
    checkAuth: () => dispatch(checkAuth())
  }
}
export default  connect(null,mapDispatchToProps)(App);
