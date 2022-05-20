import React from "react"
import "./Footer.scss"
import Container from "../../hoc/Container"
import github from "./../../assets/images/github.svg"
import telegram from "./../../assets/images/telegram.svg"
import instgram from "./../../assets/images/instgram.svg"
const Footer = ()=>{
    return(
        <Container>
            <div className="footer">
                <div className="footer-social-media">
                    <img className="footer-image" src={github} alt="github"/>
                    <img className="footer-image" src={telegram}/>
                    <img className="footer-image" src={instgram}/>
                </div>
                <p className="footer-text">©ساخته شده توسط حامد دنیوی راد</p>
            </div>
        </Container>
    )
}

export default Footer