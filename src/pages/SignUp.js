import React from "react"
import {connect} from "react-redux"
import {signUpUser} from "../redux/actions/authActions"

class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            password_confirmation: "",
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
        this.props.signUpUser(this.state).then(() => {
            window.location = "/"
        })
    }


    render (){
        return (
            <React.Fragment>
               <form onSubmit={this.handleSubmit}>
                   <label>Name</label>
                   <input type="text" name="name" onChange={this.handleChange}/>
                   <label>email</label>
                   <input type="email" name="email" onChange={this.handleChange}/>
                   <label>password</label>
                   <input type="password" name="password" onChange={this.handleChange}/>
                   <label>Password Confirmation</label>
                   <input type="password" name="password_confirmation" onChange={this.handleChange}/>
                   <input type="submit" value="Sign Up"/>     
               </form>
            </React.Fragment>
        )

    }
    

}
const mapDispatchToProps = dispatch => {
    return {
        signUpUser: user => dispatch(signUpUser(user))
    }

}

export default connect(null, mapDispatchToProps)(SignUp);