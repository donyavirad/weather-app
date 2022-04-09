import React from "react"
import lighting from "../../../assets/images/png/lighting.png"
import sun from "../../../assets/images/png/sun.png"
import moon from "../../../assets/images/png/moon.png"
import partlysun from "../../../assets/images/png/partlysun.png"
import partlymoon from "../../../assets/images/png/partlymoon.png"
import snow from "../../../assets/images/png/snow.png"
import rain from "../../../assets/images/png/rain.png"
import clouds from "../../../assets/images/png/clouds.png"
const Background =(props)=>{
    const icon = props.weather.icon
    return(
        <div className="header" style={{
            background: `url(${
            icon === "01d" ? sun
            : icon === "01n" ? moon
            : icon === "02d" ? partlysun
            : icon === "02n" ? partlymoon
            : icon === "03d" || icon === "03n" ? partlysun
            : icon === "04d" || icon === "04n" ? clouds
            : icon === "09d" || icon === "09n" ? rain
            : icon === "11d" || icon === "11n" ? lighting
            : icon === "13d" || icon === "13n" ? snow
            // : icon === "50d" || icon === "50n" ? mist
            : null
            })`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}>
            {props.children}
        </div>
    )
       
}
export default Background