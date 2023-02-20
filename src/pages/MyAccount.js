import React, {useState, useEffect} from "react"
import AccountForm from "../AccountForm"
import Accounts from "../Accounts"
import {connect} from 'react-redux'
import {fetchAccounts} from '../redux/actions/accountActions'

const MyAccount = (props) => {
    useEffect(() =>{
        props.fetchAccounts()
    },[] )
    const [showForm,setShowForm] = useState(false)
    return (
        <React.Fragment>
            <button onClick={() => setShowForm(!showForm)}>Create Account</button>
            {showForm && <AccountForm/>}
            <Accounts/>
        </React.Fragment>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAccounts: () => dispatch(fetchAccounts())
    }
}
export default connect(null,mapDispatchToProps)(MyAccount)