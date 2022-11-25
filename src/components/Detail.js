import React from "react";

const Detail = (props)=>{
    return(
        <div className="detail">
            <div>
                <img src={props.img} alt="user"/>
            </div>
            <div className="detail-text">
                <h4>{props.head}</h4>
                <p>{props.para}</p>
            </div>
        </div>
    )
}

export default Detail;