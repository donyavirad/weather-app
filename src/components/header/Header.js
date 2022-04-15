import React,{useState,useEffect} from "react"
import "./Header.scss"
import Container from "../../hoc/Container"
import Navbar from "../navbar/Navbar"
import ImageStatus from "../imageStatus/imageStatus"
import Background from "./bachground/background"
const Header =(props)=>{
    const [header,setHeader] = useState({
        api:{},
        loc:{}
    })
    useEffect(()=>{
        setHeader({
            api: props.api,
            loc: props.loc
        })
    },[])

    const timeHandler =(dt)=>{
        const time = new Date(dt * 1000)
        const month =['ژانویه','فوریه','مارس','آوریل','مه','ژوئن','جولای','اوت','سپتامبر','اکتبر','نوامبر','دسامبر']
        const day = time.getDate()
        const days = ['یک شنبه','دو شنبه','سه شنبه','چهار شنبه','پنج شنبه','جمعه','شنبه']
        const indexdays = time.getDay()
        const indexMonth= time.getMonth()
        return `${days[indexdays]}، ${day} ${month[indexMonth]}`
    }
    const roundNumber =(num)=>{
        return Math.round(num)
    }
    if(header.api.status === 200){
        return(
            <Background weather={header.api.data.current.weather[0]}>
                <Container>
                    <div className="header__container">
                        <Navbar/>
                        <div className="header__info">
                            <p className="header__info-location">{header.loc.local_names.fa}</p>
                            <p className="header__info-date">{timeHandler(header.api.data.current.dt)}</p>
                            <div className="header__info-section">
                                <p className="header__info-temp">{roundNumber(header.api.data.current.temp)}°C</p>
                                <ImageStatus weather={header.api.data.current.weather[0]} class="header__info-image"/>
                            </div>
                            <p className="header__info-desc">{header.api.data.current.weather[0].description}</p>
                        </div>
                        
                    </div>
                </Container>
            </Background>
        )
        }else{
            return(
                <div></div>
            )
    }
}

export default Header