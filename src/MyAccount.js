import React, {useState} from "react"
import AccountForm from "./AccountForm"

const MyAccount = () => {
    const [showForm,setShowForm] = useState(false)
    return (
        <React.Fragment>
            <button onClick={() => setShowForm(!showForm)}>Create Account</button>
            {showForm && <AccountForm/>}
        </React.Fragment>

    )
}

export default MyAccount