import React,{useState,useEffect} from "react"
import "./Header.scss"
import Container from "../../hoc/Container"
import Navbar from "../navbar/Navbar"
import sun from "../../assets/images/sun.svg"
const Header =(props)=>{
    const [header,setHeader] = useState({
        api:{},
    })
    useEffect(()=>{
        setHeader({
            api: props.api
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
    return(
        <div className="header">
            <Container>
                <div className="header__container">
                    <Navbar/>
                    {header.api.status === 200 ?
                    <div className="header__info">
                        <p className="header__info-location">اسفراین ،ایران</p>
                        <p className="header__info-date">{timeHandler(header.api.data.current.dt)}</p>
                        <div className="header__info-section">
                            <p className="header__info-temp">{roundNumber(header.api.data.current.temp)}°C</p>
                            <img className="header__info-image" src={sun}/>
                        </div>
                        <p className="header__info-desc">{header.api.data.current.weather[0].description}</p>
                    </div>
                    : null}
                </div>
            </Container>
        </div>
    )
}

export default Header