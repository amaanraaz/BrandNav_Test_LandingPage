import React from "react";
import Navbar from "./Navbar";
import heroImg from "./images/Illustration 1.svg"

const Header = ()=>{
    return(
    <div className="header">
        <Navbar/>
        <div className="hero-section">
            <div className="hero-text">
                <h1>Want anything to be easy with <span>LaslesVPN.</span></h1>
                <p>Provide a network for all your needs with ease and fun using LaslesVPN and discover interesting features from us.</p>
                <button>Get Started</button>
            </div>
            <div className="hero-img">
                <img src={heroImg} alt="hero-img"/>
            </div>
        </div>
    </div>
    )
}

export default Header;