import React from "react"
import { useState } from "react"

import logo from './images/moatlogo.png'

export default function Header() {
    const[show, setshow] = useState(false)

    function turn_useState_true() {
        setshow(!show)
    }

    return(
        <div className="header">
            <div className="header-texts">
                <div>
                    <img src={logo}/>
                    oat Music
                </div>
                <p className="albums">
                    Albums
                </p>
            </div>
            <div className="dropbox">
                <ion-icon name="reorder-three-outline" onClick={() => turn_useState_true()}></ion-icon>
                { show? <div className="dropbox-options">
                    <ul>
                        <li>Albums</li>
                        <li>Artists</li>
                        <li>Logout</li>
                    </ul>
                </div>:<></>} 
            </div>
        </div>
    )
}