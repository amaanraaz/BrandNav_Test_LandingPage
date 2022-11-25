import React from "react";
import greenTick from "./images/greentick.svg";

const Statements = (props)=>{
    return(
        <div className="text">
        <img src={greenTick} alt="tick"/>
        <p>{props.text}</p>
        </div>
    )
}

export default Statements;