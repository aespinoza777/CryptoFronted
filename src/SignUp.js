import React from "react"

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

export default SignUp;