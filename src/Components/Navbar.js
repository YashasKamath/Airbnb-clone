import React from "react"

export default function Navbar(){
    return(
        <nav className="nav">
            <img src={process.env.PUBLIC_URL + "/Images/logo.png"} className='logo'/>
        </nav>
    )
}