import React from "react"
import {Link, withRouter} from "react-router-dom"
import {connect} from "react-redux"

const NavBar = (props) => {

    const handleSignOut = () => {
        props.signOutUser()
    }
    return (
        <React.Fragment>
            <Link to="/">Home Page</Link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/coins">Coins</Link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            {!props.currentUser.loggedIn && <React.Fragment><Link to="/sign_up">Sign Up</Link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</React.Fragment>}
            {!props.currentUser.loggedIn && <><Link to="/login">Login</Link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</>}
            <Link to="/exchanges">Exchanges</Link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            {props.currentUser.loggedIn &&<React.Fragment> <Link to="/logout" onClick={handleSignOut}>Log Out</Link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</React.Fragment>} 
            {props.currentUser.loggedIn && <><Link to="/my_account">My Account</Link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</>}
            
            
            <br></br>
        </React.Fragment>
    )

}
const mapStateToProps = state => {
    return {
        currentUser: state.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signOutUser: () => dispatch({type: "LOGOUT_USER"})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));