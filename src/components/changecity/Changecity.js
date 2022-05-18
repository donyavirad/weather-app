import React from "react"
import "./Changecity.scss"
import { Link } from "react-router-dom"
import edit from "../../assets/images/edit.svg"
const ChangeCity = ()=>{
    return(
        <Link to="/start">
            <img className="navbar__image" src={edit} alt=""/>
        </Link>
    )
}

export default ChangeCity