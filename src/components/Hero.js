import React from "react";
import heroImg from "./images/Illustration 2.svg";
import HeroPara from "./Statements";

const Hero = ()=>{
    return(
        <div className="hero-section2">
            <div>
                <img className="hero-img" src={heroImg} alt="illustration2"/>
            </div>
            <div className="hero-text2">
                <h1>
                    We Provide Many Features You Can Use
                </h1>
                <p>
                    You can explore the features that we provide with fun and have their own functions each feature.
                </p>
                <div>
                    <HeroPara text="Powerful online protection"/>
                    <HeroPara text="Internet without borders"/>
                    <HeroPara text="Supercharged VPN"/>
                    <HeroPara text="No specific time limits"/>
                </div>
            </div>
        </div>
    )
}

export default Hero;