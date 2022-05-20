import React from "react"
import axios from "axios"
import "./Main.scss"
import Header from "../header/Header"
import Hourly from "../hourly/Hourly"
import Daily from "../daily/Daily"
import Footer from "../footer/Footer"

class Main extends React.Component{
    state={
        api:{},
        loc:""
    }
    componentDidMount(){
        const local = localStorage.getItem("weatherData")
        const location = JSON.parse(local)
        this.setState({
            loc:location
        })
       
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&lang=fa&units=metric&appid=3c1faa2ad2a590d8f291f067c5ba2c00`)
            .then((response)=>{
                this.setState({
                    api: response
                })
            })
    }
    render(){
       
        return(
                this.state.api.status === 200 ?
                    <div className="main">
                        <Header api={this.state.api} loc={this.state.loc}/>
                        <Hourly api={this.state.api}/>
                        <Daily api={this.state.api}/>
                        <Footer/>
                    </div>
                    : 
                    <div className="loading">
                        <p>درحال بارگذاری...</p>
                    </div>
        )
    }
}

export default Main