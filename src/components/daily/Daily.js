import React from "react"
import Container from "../../hoc/Container"
import "./Daily.scss"
import DailyItem from "./dailyitem/dailyItem"
const Daily = (props)=>{

    const showData = ()=>{
        const Data = props.api
        Data.splice(7,1)
        return(
            <div className="daily-content">
                {Data.map((item,id)=>{
                    return(
                        <DailyItem
                            key={id}
                            id={id}
                            dt={item.dt}
                            pop={item.pop}
                            weather={item.weather[0]}
                            tempMin={item.temp.min}
                            tempMax={item.temp.max}
                        />
                    )
                })}
            </div>
        )
    }
    
    return(
        <div className="daily">
            <Container>
                    {showData()}
            </Container>
        </div>
    )
}

export default Daily