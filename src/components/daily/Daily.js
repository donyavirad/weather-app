import React, {useEffect,useState} from "react"
import Container from "../../hoc/Container"
import "./Daily.scss"
const Daily = (props)=>{
    const [data, setData] = useState({
        api: {}
    })
    useEffect(()=>{
        setData({
            api: props.api
        })
    })
    return(
        <div className="daily">
            <Container>
                {data.api.status === 200 ? 
                <div className="daily-container">
                    <div className="daily-title">
                        <h2>پیش بینی 7 روز آینده</h2>
                    </div>
                    <div className="daily-content">
                            <div className="daily-item">
                                <div className="daily-item-time">
                                    <p>Today</p>
                                </div>
                                <div className="daily-item-rain">
                                    <p>80%</p>
                                </div>
                                <div className="daily-item-day-night">
                                    <img/>
                                    <img/>
                                </div>
                                <div className="dayli-item-min-mix">
                                    <p>12/29</p>
                                </div>
                            </div>
                            <div className="daily-item">
                                <div className="daily-item-time">
                                    <p>Today</p>
                                </div>
                                <div className="daily-item-rain">
                                    <p>80%</p>
                                </div>
                                <div className="daily-item-day-night">
                                    <img/>
                                    <img/>
                                </div>
                                <div className="dayli-item-min-mix">
                                    <p>12/29</p>
                                </div>
                            </div>
                            <div className="daily-item">
                                <div className="daily-item-time">
                                    <p>Today</p>
                                </div>
                                <div className="daily-item-rain">
                                    <p>80%</p>
                                </div>
                                <div className="daily-item-day-night">
                                    <img/>
                                    <img/>
                                </div>
                                <div className="dayli-item-min-mix">
                                    <p>12/29</p>
                                </div>
                            </div>
                            <div className="daily-item">
                                <div className="daily-item-time">
                                    <p>Today</p>
                                </div>
                                <div className="daily-item-rain">
                                    <p>80%</p>
                                </div>
                                <div className="daily-item-day-night">
                                    <img/>
                                    <img/>
                                </div>
                                <div className="dayli-item-min-mix">
                                    <p>12/29</p>
                                </div>
                            </div>
                            <div className="daily-item">
                                <div className="daily-item-time">
                                    <p>Today</p>
                                </div>
                                <div className="daily-item-rain">
                                    <p>80%</p>
                                </div>
                                <div className="daily-item-day-night">
                                    <img/>
                                    <img/>
                                </div>
                                <div className="dayli-item-min-mix">
                                    <p>12/29</p>
                                </div>
                            </div>
                            <div className="daily-item">
                                <div className="daily-item-time">
                                    <p>Today</p>
                                </div>
                                <div className="daily-item-rain">
                                    <p>80%</p>
                                </div>
                                <div className="daily-item-day-night">
                                    <img/>
                                    <img/>
                                </div>
                                <div className="dayli-item-min-mix">
                                    <p>12/29</p>
                                </div>
                            </div>
                            <div className="daily-item">
                                <div className="daily-item-time">
                                    <p>Today</p>
                                </div>
                                <div className="daily-item-rain">
                                    <p>80%</p>
                                </div>
                                <div className="daily-item-day-night">
                                    <img/>
                                    <img/>
                                </div>
                                <div className="dayli-item-min-mix">
                                    <p>12/29</p>
                                </div>
                            </div>
                    </div>
                </div>
                : null }
            </Container>

        </div>
    )
}

export default Daily