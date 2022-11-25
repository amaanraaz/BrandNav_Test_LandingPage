import React from "react";

const FooterLinks = (props)=>{
    return(
        <div className="footer-links">
            <h3>{props.head}</h3>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <p>{props.text3}</p>
            <p>{props.text4}</p>
            <p>{props.text5}</p>
            <p>{props.text6}</p>
        </div>
    )
}

export default FooterLinks;