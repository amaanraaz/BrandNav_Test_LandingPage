import React from "react";
import Logo from './images/Logo.svg'

const Navbar = ()=>{
    return(
    <nav className="navbar">
        <div className="logo-img">
            <img alt="log" src={Logo}/>
        </div>
        <div className="menu-options">
            <ul className="menu">
                <li className="list-items">About</li>
                <li className="list-items">Features</li>
                <li className="list-items">Pricing</li>
                <li className="list-items">Testimonials</li>
                <li className="list-items">Help</li>
            </ul>
        </div>
        <div className="sign-in">
            <div className="sign-link"><h5>Sign In</h5></div>
            <div className="sign-btn"><button>Sign Up</button></div>
        </div>
    </nav>
    )
}

export default Navbar;


