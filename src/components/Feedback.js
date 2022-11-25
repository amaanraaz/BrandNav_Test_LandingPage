import React from "react";

const Feedback = (props)=>{
    return(
        <div className="feedback-section">
        <div className="user-details">
            <img src={props.photo} alt="user-img"/>
            <div>
                <h2 className="username">{props.name}</h2>
                <p className="user-add">{props.add}</p>
            </div>
            <h3 className="rate">{props.rate}⭐</h3>
        </div>
        <div className="user-words">
            {props.text}
        </div>
        </div>)
}

export default Feedback;