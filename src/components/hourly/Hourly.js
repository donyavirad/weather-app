import React,{useEffect, useState}from "react"
import "./Hourly.scss"
import Container from "../../hoc/Container"
import ImageStatus from "../imageStatus/imageStatus"
const Hourly = (props)=>{
    const [hourly,setHourly] = useState({
        api:{},
    })
    useEffect(()=>{
        setHourly({
            api: props.api
        })
    },[])
    const timeHandler= (dt)=>{
        const time = new Date(dt *1000)
        let hour = time.getHours()
        if(hour < 10){
            hour =`0${hour}`
        }
        let minets = time.getMinutes()
        if(minets < 10){
            minets = `0${minets}`
        }
        return `${hour}:${minets}`
    }
    const roundNumber =(num)=>{
        return Math.round(num)
    }
    if(hourly.api.status === 200){
        const data = hourly.api.data.hourly
        data.splice(23,24)
        return(
            <div className="hourly">
                <Container>
                    <div className="hourly__container">
                        <div className="hourly__title">
                            <p>پیش بینی ۲۴ ساعت آینده</p>
                        </div>
                        <div className="hourly__content">
                            <div className="hourly__content-scroll">
                                <div className="hourly__content-grid">
                                    {data.map((item,id)=>{
                                        return( 
                                        <div className="hourly__content-item" key={id} id={`item-${id}`}>
                                            <p className="hourly__content-time">{timeHandler(item.dt)}</p>
                                            <ImageStatus weather={item.weather[0]} class="hourly__content-image"/>
                                            <p className="hourly__content-temp">{roundNumber(item.temp)}°</p>
                                            <p className="hourly__content-rain">{roundNumber(item.pop *100 )}%</p>
                                        </div>
                                    )
                                    })}
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }else{
        return(
            <div></div>
        )
    }
}

export default Hourly