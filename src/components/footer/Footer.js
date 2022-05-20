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
                    <a href="https://github.com/donyavirad" className="footer-link" target="_blank">
                        <img className="footer-image" src={github} alt="github"/>
                    </a>
                    <a href="https://t.me/donyavi_developer" className="footer-link" target="_blank">
                        <img className="footer-image" src={telegram}/>
                    </a>
                    <a href="https://instagram.com/donyavi_developer?igshid=YmMyMTA2M2Y=" className="footer-link" target="_blank">
                        <img className="footer-image" src={instgram}/>
                    </a>
                </div>
                <p className="footer-text">©ساخته شده توسط حامد دنیوی راد</p>
            </div>
        </Container>
    )
}

export default Footer