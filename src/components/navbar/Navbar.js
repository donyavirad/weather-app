import React from "react"
import "./Navbar.scss"
import { Link } from "react-router-dom"
import edit from "../../assets/images/edit.svg"
const Navbar = ()=>{
    return(
        <Link to="/start">
            <div className="navbar">
                <img className="navbar__image" src={edit} alt=""/>
                <p className="navbar__text">تغییر مکان</p>
            </div>
        </Link>
    )
}

export default Navbar