import React from "react";

const TextComp = (props)=>{
    return(
    <div className="textcomp">
        <h1>
            {props.head}
        </h1>
        <p>
            {props.para}
        </p>
    </div>
    )
}

export default TextComp;