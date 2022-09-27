import React from "react"

function Header(){
    return(
        <header>
            <img src=".\logo192.png" width="80px" alt="" className="img" /> 
            
            <nav className="nav"> 
                <ul className="nav-items">
                    <li>Tutorial</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>          
            </nav>    
        </header>
    )
}

export default Header