import React from "react"
import "./Hourly.scss"
import Container from "../../hoc/Container"
import sun from "../../assets/images/sun.svg"
const Hourly = (props)=>{
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
                                <div className="hourly__content-item" id="start">
                                    <p className="hourly__content-time">09:43</p>
                                    <img src={sun}/>
                                    <p className="hourly__content-temp">27°</p>
                                    <p className="hourly__content-rain">14%</p>
                                </div>
                                <div className="hourly__content-item">
                                    <p className="hourly__content-time">09:43</p>
                                    <img src={sun}/>
                                    <p className="hourly__content-temp">27°</p>
                                    <p className="hourly__content-rain">14%</p>
                                </div>
                                <div className="hourly__content-item">
                                    <p className="hourly__content-time">09:43</p>
                                    <img src={sun}/>
                                    <p className="hourly__content-temp">27°</p>
                                    <p className="hourly__content-rain">14%</p>
                                </div>
                                <div className="hourly__content-item">
                                    <p className="hourly__content-time">09:43</p>
                                    <img src={sun}/>
                                    <p className="hourly__content-temp">27°</p>
                                    <p className="hourly__content-rain">14%</p>
                                </div>
                                <div className="hourly__content-item">
                                    <p className="hourly__content-time">09:43</p>
                                    <img src={sun}/>
                                    <p className="hourly__content-temp">27°</p>
                                    <p className="hourly__content-rain">14%</p>
                                </div>
                                <div className="hourly__content-item">
                                    <p className="hourly__content-time">09:43</p>
                                    <img src={sun}/>
                                    <p className="hourly__content-temp">27°</p>
                                    <p className="hourly__content-rain">14%</p>
                                </div>
                                <div className="hourly__content-item">
                                    <p className="hourly__content-time">09:43</p>
                                    <img src={sun}/>
                                    <p className="hourly__content-temp">27°</p>
                                    <p className="hourly__content-rain">14%</p>
                                </div>
                                <div className="hourly__content-item">
                                    <p className="hourly__content-time">09:43</p>
                                    <img src={sun}/>
                                    <p className="hourly__content-temp">27°</p>
                                    <p className="hourly__content-rain">14%</p>
                                </div>
                                <div className="hourly__content-item">
                                    <p className="hourly__content-time">09:43</p>
                                    <img src={sun}/>
                                    <p className="hourly__content-temp">27°</p>
                                    <p className="hourly__content-rain">14%</p>
                                </div>
                                <div className="hourly__content-item">
                                    <p className="hourly__content-time">09:43</p>
                                    <img src={sun}/>
                                    <p className="hourly__content-temp">27°</p>
                                    <p className="hourly__content-rain">14%</p>
                                </div>
                                <div className="hourly__content-item">
                                    <p className="hourly__content-time">09:43</p>
                                    <img src={sun}/>
                                    <p className="hourly__content-temp">27°</p>
                                    <p className="hourly__content-rain">14%</p>
                                </div>
                                <div className="hourly__content-item">
                                    <p className="hourly__content-time">09:43</p>
                                    <img src={sun}/>
                                    <p className="hourly__content-temp">27°</p>
                                    <p className="hourly__content-rain">14%</p>
                                </div>
                                <div className="hourly__content-item">
                                    <p className="hourly__content-time">09:43</p>
                                    <img src={sun}/>
                                    <p className="hourly__content-temp">27°</p>
                                    <p className="hourly__content-rain">14%</p>
                                </div>
                                <div className="hourly__content-item" id="end">
                                    <p className="hourly__content-time">09:43</p>
                                    <img src={sun}/>
                                    <p className="hourly__content-temp">27°</p>
                                    <p className="hourly__content-rain">14%</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Hourly