import React from "react"
import {Link, withRouter} from "react-router-dom"

const NavBar = () => {
    return (
        <React.Fragment>
            <Link to="/">Home Page</Link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/coins">Coins</Link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/sign_up">Sign Up</Link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/login">Login</Link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/exchanges">Exchanges</Link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            
            
            <br></br>
        </React.Fragment>
    )

}
export default withRouter(NavBar);