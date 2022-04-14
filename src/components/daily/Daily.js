import React, {useEffect,useState} from "react"
import Container from "../../hoc/Container"
import "./Daily.scss"
import ImageStatus from "../imageStatus/imageStatus"
import water from "../../assets/images/water.svg"
import upDown from "../../assets/images/upDown.svg"
const Daily = (props)=>{
    const [data, setData] = useState({
        api: {},
        
    })
    useEffect(()=>{
        setData({
            api: props.api
        })
    },[])
    const timeHandler =(dt)=>{
        const time = new Date(dt * 1000)
        const days = ['یک شنبه','دو شنبه','سه شنبه','چهار شنبه','پنج شنبه','جمعه','شنبه']
        const indexdays = time.getDay()
        return `${days[indexdays]}`
    }
    const roundNumber =(num)=>{
        return Math.round(num)
    }
    const showData = ()=>{
        const updatedData = data.api.data.daily
        updatedData.splice(6,1)
        console.log(updatedData)
        return(
            <div className="daily-content">
                {updatedData.map((item,id)=>{
                    return(
                        <div className="daily-item" key={id}>
                            <div className="daily-item-time">
                                <p>{ id === 0 ? "امروز" :
                                timeHandler(item.dt)
                                }</p>
                            </div>
                            <div className="daily-item-rain">
                                <img src={water} alt="water"/>
                                <p>{roundNumber(item.pop * 100) + "%"}</p>
                            </div>
                            <div className="daily-item-image">
                                <ImageStatus weather={item.weather[0]}/>
                            </div>
                            <div className="daily-item-min-mix">
                                <img src={upDown}/>
                                <p>{roundNumber(item.temp.min)}°/{roundNumber(item.temp.max)}°</p>
                            </div>
                        </div>
                    )
                })}
            
            </div>
        )
    }
    return(
        <div className="daily">
            <Container>
                <div className="daily-container">
                    <div className="daily-title">
                        <h2>پیش بینی 7 روز آینده</h2>
                    </div>
                {data.api.status === 200 ? 
                    showData()
                    : null }
                </div>
            </Container>

        </div>
    )
}

export default Daily