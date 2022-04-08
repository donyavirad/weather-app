import React from "react"
import "./Header.scss"
import Container from "../../hoc/Container"
import Navbar from "../navbar/Navbar"
import sun from "../../assets/images/sun.svg"
const Header =()=>{
    return(
        <div className="header">
            <Container>
                <div className="header__container">
                    <Navbar/>
                    <div className="header__info">
                        <p className="header__info-location">اسفراین ،ایران</p>
                        <p className="header__info-date">دو شنبه ،2 سپتامبر</p>
                        <div className="header__info-section">
                            <p className="header__info-temp">24°C</p>
                            <img className="header__info-image" src={sun}/>
                        </div>
                        <p className="header__info-desc">پوشیده از ابر</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header