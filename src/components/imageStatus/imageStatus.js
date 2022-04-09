import React from "react"
import sun from "../../assets/images/sun.svg"
import moon from "../../assets/images/moon.svg"
import partlysun from "../../assets/images/partlysun.svg"
import partlymoon from "../../assets/images/partlymoon.svg"
import clouds from "../../assets/images/clouds.svg"
import rain from "../../assets/images/rain.svg"
import partlyRainMoon from "../../assets/images/partlyRainMoon.svg"
import partlyRainSun from "../../assets/images/partlyRainSun.svg"
import lighting from "../../assets/images/lighting.svg"
import snowfall from "../../assets/images/snowfall.svg"
import mist from "../../assets/images/mist.svg"

const ImageStatus =(props)=>{
    const icon = props.weather.icon
    return(
        <img src={
            icon === "01d" ? sun
            : icon === "01n" ? moon
            : icon === "02d" ? partlysun
            : icon === "02n" ? partlymoon
            : icon === "03d" || icon === "03n" ? partlysun
            : icon === "04d" || icon === "04n" ? clouds
            : icon === "09d" || icon === "09n" ? rain
            : icon === "10d" ? partlyRainSun
            : icon === "10n" ? partlyRainMoon
            : icon === "11d" || icon === "11n" ? lighting
            : icon === "13d" || icon === "13n" ? snowfall
            : icon === "50d" || icon === "50n" ? mist
            : null
        } className={props.class}/>
    )
}

export default ImageStatus