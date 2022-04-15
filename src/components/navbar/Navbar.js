import React from "react"
import "./Navbar.scss"
import { Link } from "react-router-dom"
import menuIcon from "../../assets/images/menu.svg"
const Navbar = ()=>{
    return(
        <Link to="/start">
            <div className="navbar">
                <img className="navbar__image" src={menuIcon} alt=""/>
                <p className="navbar__text">گزینه ها</p>
            </div>
        </Link>
    )
}

export default Navbar