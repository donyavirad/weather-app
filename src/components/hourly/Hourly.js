import React from "react"
import "./Hourly.scss"
import Container from "../../hoc/Container"
import HourlyItem from "./HourlyItem/HourlyItem"
const Hourly = (props)=>{
    const data = props.api
    data.splice(23,24)

    return(
        <div className="hourly">
            <Container>
                <div className="hourly-scroll">
                    <div className="hourly-grid">
                        {data.map((item,id)=>{
                            return( <HourlyItem 
                                key={id}
                                id={id}
                                dt={item.dt}
                                weather={item.weather[0]}
                                temp={item.temp}
                                pop={item.pop}
                            />
                        )
                        })}
                        
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Hourly