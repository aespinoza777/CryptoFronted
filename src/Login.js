import React from "react"
import {loginUser} from "./redux/actions/authActions"
import {connect} from "react-redux"

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
        }
}

handleChange = event=>{
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit = event => {
    event.preventDefault()
    this.props.loginUser(this.state).then(() => {
        window.location ="/"
    })
}

render (){
    return (
        <React.Fragment>
           <form onSubmit={this.handleSubmit}>    
               <label>email</label>
               <input type="email" name="email" onChange={this.handleChange}/>
               <label>password</label>
               <input type="password" name="password" onChange={this.handleChange}/>
               <input type="submit" value="Login"/>  
           </form>
        </React.Fragment>
    )

}


}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: user => dispatch(loginUser(user))
    }

}

export default connect(null, mapDispatchToProps)(Login);