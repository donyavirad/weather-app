import React, { useContext } from "react"
import axios from "axios"
import Header from "../header/Header"
import Hourly from "../hourly/Hourly"
import Daily from "../daily/Daily"
class Main extends React.Component{
    state={
        api:{},
        loc:""
    }
    componentDidMount(){
        const local = localStorage.getItem("weatherInfo")
        const location = JSON.parse(local)
        const city = this.setState({
            loc:location
        })
        console.log()
       
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&lang=fa&units=metric&appid=3c1faa2ad2a590d8f291f067c5ba2c00`)
            .then((response)=>{
                this.setState({
                    api: response
                })
            })
    }
    render(){
        console.log(this.state.api)
        return(
                this.state.api.status === 200 ?
                    <div>
                        <div className="main-header">
                            <Header api={this.state.api} loc={this.state.loc}/>
                        </div>
                        <div className="main-content">
                            <Hourly api={this.state.api}/>
                            <Daily/>
                        </div>
                    </div>
                    : 
                    <div style={{
                        position: "absolute",
                        display: "flex",
                        justifyContent:"center",
                        alignItems: "center",
                        width:"100%",
                        height: "100%",
                    }}>
                        <p>درحال بارگذاری...</p>
                    </div>
        )
    }
}

export default Main