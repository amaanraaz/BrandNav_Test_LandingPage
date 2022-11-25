import React from "react";
import giftImage from "./images/Free.svg"
import Statements from "./Statements";

const Cards = (props)=>{
    return(
        <div className="card">
            <div><img src={giftImage} alt="free" /></div>
            <h2>{props.head}</h2>
            <div>
                <Statements text={props.text1}/>
                <Statements text={props.text2}/>
                <Statements text={props.text3}/>
                <Statements text={props.text4}/>
                <Statements text={props.text5}/>
                <Statements text={props.text6}/>
            </div>
            <div className="plan-btn">
                <h3>{props.price}</h3>
                <button>Select</button>
            </div>
        </div>
    )
}

export default Cards;