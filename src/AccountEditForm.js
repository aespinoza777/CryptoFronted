import React,{useState} from "react"
import {connect} from 'react-redux'
import {updateAccount} from './redux/actions/accountActions'

const AccountEditForm = (props) => {
    const [coinQuantity,setCoinQuantity] = useState(props.account.coin_quantity)

    const handleSubmit = (e) => {

        e.preventDefault()
        props.updateAccount({
            id: props.account.id,
            coin_quantity: coinQuantity
        })
        props.setShowForm(false)
    }

return (
    <form onSubmit={handleSubmit}>
        <label>Quantity</label>
        <input type="number" value={coinQuantity} onChange={e => setCoinQuantity(e.target.value)}/>
        <input type="submit"/>
    </form>

)

}

const mapDispatchToProps = dispatch => {
    return {
        updateAccount: (account) => dispatch(updateAccount(account))
    }
}

export default connect(null, mapDispatchToProps)(AccountEditForm)