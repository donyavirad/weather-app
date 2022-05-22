import React, {useEffect,useState} from "react"
import Container from "../../hoc/Container"
import "./Daily.scss"
import DailyItem from "./dailyitem/dailyItem"
const Daily = (props)=>{
    const [data, setData] = useState({
        api: {},
        
    })
    useEffect(()=>{
        setData({
            api: props.api
        })
    },[])

    const showData = ()=>{
        const updatedData = data.api.data.daily
        updatedData.splice(6,1)
        return(
            <div className="daily-content">
                {updatedData.map((item,id)=>{
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
                {data.api.status === 200 ? 
                    showData()
                    : null }
            </Container>

        </div>
    )
}

export default Daily