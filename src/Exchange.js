import React from "react"


const Exchange = (props) => {
    return (
        <React.Fragment>
            <h4>{props.exchange.name}</h4>
            <img width="500" src={props.exchange.image}/>
        </React.Fragment>

    )
}

export default Exchange