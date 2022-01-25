import React,{useState} from 'react'
import AccountEditForm from "./AccountEditForm"

const Account = (props) => {
   const [showForm,setShowForm] = useState(false)

    return (
        <React.Fragment>
            <div className="card">
            <p>Ticker: {props.account.ticker}</p>
            <button onClick={() => setShowForm(!showForm) }>Edit</button>
            {showForm && <AccountEditForm account={props.account} setShowForm={setShowForm}/>}
            <p>Quantity: {props.account.coin_quantity}</p>
            <p>Amount: {props.account.amount.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            </div>

        </React.Fragment>

    )


} 

export default Account