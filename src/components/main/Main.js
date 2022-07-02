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
        loc:"",
        loading: false,
        error: false
    }
    componentDidMount(){
        const local = localStorage.getItem("weatherData")
        const location = JSON.parse(local)
        this.setState({
            loc:location,
            loading: true
        })
       
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&lang=fa&units=metric&appid=3c1faa2ad2a590d8f291f067c5ba2c00`)
            .then((response)=>{
                this.setState({
                    api: response,
                    loading: false
                })
            }).catch(()=>{
                localStorage.removeItem("weatherData")
                this.setState({error : true, loading: false})
            })
    }

    render(){
        let content = ""
        if(this.state.loading){
            content = (
            <div className="loading">
                <p>درحال بارگذاری...</p>
            </div>
            )
        }
        if(this.state.api.status === 200){
            content = <div className="main">
                <Header api={this.state.api.data.current} loc={this.state.loc}/>
                <Hourly api={this.state.api.data.hourly}/>
                <Daily api={this.state.api.data.daily}/>
                <Footer/>
            </div>
        }
        if(this.state.error){
            content = <div className="loading">
                <span>لطفا اینترنت خود را بررسی کنید!</span>
                <a href="./">بازگشت</a>
            </div>
        }

        return content
    }
}

export default Main