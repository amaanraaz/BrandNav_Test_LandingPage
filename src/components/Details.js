import React from "react";
import personIcon from "./images/person.svg";
import locationIcon from "./images/person.svg";
import serverIcon from "./images/person.svg";
import Detail from "./Detail";


const Details = ()=>{
    return(
    <div className="details">
        <Detail img={personIcon} head={"90+"} para={"Users"} />
        <Detail img={locationIcon} head={"30+"} para={"Locations"} />
        <Detail img={serverIcon} head={"50+"} para={"Servers"} />
    </div>)
}

export default Details;