import React,{useState,useEffect, useMemo} from "react"
import "./Header.scss"
import useTime from "../../hooks/useTime"
import Container from "../../hoc/Container"
import ChangeCity from "../changecity/Changecity"
import ImageStatus from "../imageStatus/imageStatus"
import Background from "./bachground/background"
const Header = (props)=>{
    const [header,setHeader] = useState({
        api:{},
        loc:{}
    })

    const date = useTime(
        header.api.status === 200 ? header.api.data.current.dt : "",
        "dayOfWeek","numberOfDay","month", "hour","minutes"
        )

    useEffect(()=>{
        setHeader({
            api: props.api,
            loc: props.loc
        })
    },[])

    const roundNumber =(num)=>{
        return Math.round(num)
    }
    if(header.api.status === 200){
        
        return(
            <Background weather={header.api.data.current.weather[0]}>
                <Container>
                    <div className="header__container" >
                        <div className="header__info">
                            <div className="header__info-location">
                                <span className="header__info-loc-name">
                                    {header.loc.local_names.fa}
                                </span>
                                <ChangeCity/>
                            </div>
                            <p className="header__info-date">{date[0]}، {date[1]} {date[2]} {date[3]}:{date[4]} </p>
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