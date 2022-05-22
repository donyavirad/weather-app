import React from "react"
import "./Header.scss"
import useTime from "../../hooks/useTime"
import Container from "../../hoc/Container"
import ChangeCity from "../changecity/Changecity"
import ImageStatus from "../imageStatus/imageStatus"
import Background from "./bachground/background"
const Header = (props)=>{
    
    const date = useTime(
        props.api.dt,
        "day","date","month", "hours","minutes"
    )
    const roundNumber =(num)=>{
        return Math.round(num)
    }

    return(
        <Background weather={props.api.weather[0]}>
            <Container>
                <div className="header__container" >
                    <div className="header__info">
                        <div className="header__info-location">
                            <span className="header__info-loc-name">
                                {props.loc.local_names.fa}
                            </span>
                            <ChangeCity/>
                        </div>
                        <p className="header__info-date">{date[0]}، {date[1]} {date[2]} {date[3]}:{date[4]} </p>
                        <div className="header__info-section">
                            <p className="header__info-temp">{roundNumber(props.api.temp)}°C</p>
                            <ImageStatus weather={props.api.weather[0]} class="header__info-image"/>
                        </div>
                        <p className="header__info-desc">{props.api.weather[0].description}</p>
                    </div>
                    
                </div>
            </Container>
        </Background>
    )
}

export default Header