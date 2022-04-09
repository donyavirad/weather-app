import React from "react"
import axios from "axios"
import Header from "../header/Header"
import Hourly from "../hourly/Hourly"
class Main extends React.Component{
    state={
        api:{}
    }
    componentDidMount(){
        axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=37.0667&lon=57.4967&lang=fa&units=metric&appid=3c1faa2ad2a590d8f291f067c5ba2c00")
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
                        <Header api={this.state.api}/>
                        <Hourly api={this.state.api}/>
                    </div>
                    : 
                    <div>
                        
                        <p>notting</p>
                    </div>
        )
    }
}

export default Main