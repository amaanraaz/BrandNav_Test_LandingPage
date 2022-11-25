import React from "react";
import Logo from './images/Logo.svg';
import FooterLinks from "./FooterLinks";
import insta from './images/Instagram.svg';
import facebook from './images/Facebook.svg';
import twitter from './images/Twitter.svg';

const Footer = ()=>{
    return(
        <div className="footer">
            <div className="footer-left">
                <img src={Logo} alt="logo"/>
                <p><span>LaslesVPN</span>is a private virtual network that has unique features and has high Security</p>
                <img src={facebook} alt="fb-logo"/>
                <img src={twitter} alt="fb-logo"/>
                <img src={insta} alt="fb-logo"/>
            </div>
            <div className="footer-right">
                <FooterLinks head={"Product"} text1={"Download"} text2={"Pricing"} text3={"Locations"} text4={"Server"} text5={"Countries"} text6={"Blog"}/>
                <FooterLinks head={"Engage"} text1={"LaslesVPN?"} text2={"FAQ"} text3={"Tutorials"} text4={"About Us"} text5={"Privacy Policy"} text6={"Terms of Services"}/>
                <FooterLinks head={"Earn Money"} text1={"Affiliate"} text2={"Become Partner"} text3={""} text4={""} text5={""} text6={""}/>
            </div>
        </div>
    )
}

export default Footer;