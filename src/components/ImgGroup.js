import React from "react";
import netflix from './images/netflix.svg'
import discord from './images/discord.svg'
import spotify from './images/spotify.svg'
import reddit from './images/reddit.svg'
import amazon from './images/amazon.svg'

const ImgGroup = ()=>{
    return(
        <div className="img-group">
            <img src={netflix} alt="logo"/>
            <img src={discord} alt="logo"/>
            <img src={spotify} alt="logo"/>
            <img src={reddit} alt="logo"/>
            <img src={amazon} alt="logo"/>
        </div>
    )
}

export default ImgGroup;