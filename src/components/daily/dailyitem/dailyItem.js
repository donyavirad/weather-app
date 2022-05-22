import React from "react"
import useTime from "../../../hooks/useTime"
import ImageStatus from "../../imageStatus/imageStatus"
import water from "../../../assets/images/water.svg"
import upDown from "../../../assets/images/upDown.svg"
const DailyItem = (props)=>{
    const time = useTime(props.dt,"day")

    
    const roundNumber =(num)=>{
        return Math.round(num)
    }
    return(
        <div className="daily-item">
            <div className="daily-item-time align-items-center">
                <span>{ props.id === 0 ? "امروز" :
                    time[0]
                }</span>
            </div>
            <div className="daily-item-rain align-items-center">
                <img src={water} alt=""/>
                <span className="align-item-center">{roundNumber(props.pop * 100) + "%"}</span>
            </div>
            <div className="daily-item-image align-items-center">
                <ImageStatus weather={props.weather}/>
            </div>
            <div className="daily-item-min-mix align-items-center">
                <img src={upDown} alt=""/>
                <span>{roundNumber(props.tempMin)}°/{roundNumber(props.tempMax)}°</span>
            </div>
        </div>
    )
}

export default DailyItem