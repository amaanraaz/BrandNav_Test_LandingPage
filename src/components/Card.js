import React from "react";
import Cards from "./Cards";

const Card = ()=>{
    return(
        <div className="cards">
            <Cards head={"Free Plan"} price={"Free"} 
            text1={"Unlimited Bandwidth"}
            text2={"Encrypted Connection"}
            text3={"No Traffic logs"}
            text4={"Works on all devices"}
            text5={""}
            text6={""}
            />
            <Cards head={"Standard Plan"} price={"$9/ mo"} 
            text1={"Unlimited Bandwidth"}
            text2={"Encrypted Connection"}
            text3={"Yes Traffic logs"}
            text4={"Works on all devices"}
            text5={"Connect Anywhere"}
            text6={""}
            />
            <Cards head={"Premium Plan"} price={"$12/ mo"} 
            text1={"Unlimited Bandwidth"}
            text2={"Encrypted Connection"}
            text3={"Yes Traffic logs"}
            text4={"Works on all devices"}
            text5={"Connect Anywhere"}
            text6={"Get new features"}
            />
        </div>
    )
}

export default Card;