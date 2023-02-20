import React,{useState} from "react"


const Coin = (props) => {
    const [likes,setLikes] = useState('0')

    const handleClick = (e) => {

    }
    
    return (
        <React.Fragment>
            
            <h4>{props.coin.ticker}</h4>
            <button onClick={handleClick} value={likes}/>
            <h4>{props.coin.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</h4>
            <img src={props.coin.image} width="100" />
        </React.Fragment>

    )
}

export default Coin