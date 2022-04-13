import React from "react"
import "./Navbar.scss"
import menuIcon from "../../assets/images/menu.svg"
const Navbar = ()=>{
    return(
        <div className="navbar">
            <img className="navbar__image" src={menuIcon} alt=""/>
            <p className="navbar__text">گزینه ها</p>
        </div>
    )
}

export default Navbar