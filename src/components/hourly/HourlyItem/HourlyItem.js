import React from "react"
import ImageStatus from "../../imageStatus/imageStatus"
import useTime from "../../../hooks/useTime"
const HourlyItem = (props)=>{
    const time = useTime(props.dt,"hour","minutes")
    
    const roundNumber =(num)=>{
        return Math.round(num)
    }
    
    return(
        <div className="hourly-item" id={`item-${props.id}`}>
            <p className="hourly-item-time">{time[0]}:{time[1]}</p>
            <ImageStatus weather={props.weather} class="hourly-item-image"/>
            <p className="hourly-item-temp">{roundNumber(props.temp)}°</p>
            <p className="hourly-item-rain">{roundNumber(props.pop *100 )}%</p>
        </div>
    )
}

export default HourlyItem