import React from "react";
import sun from "../../assets/images/sun.svg";
import moon from "../../assets/images/moon.svg";
import partlysun from "../../assets/images/partlysun.svg";
import partlymoon from "../../assets/images/partlymoon.svg";
import clouds from "../../assets/images/clouds.svg";
import rain from "../../assets/images/rain.svg";
import partlyRainMoon from "../../assets/images/partlyRainMoon.svg";
import partlyRainSun from "../../assets/images/partlyRainSun.svg";
import lighting from "../../assets/images/lighting.svg";
import snowfall from "../../assets/images/snowfall.svg";
import mist from "../../assets/images/mist.svg";

const ImageStatus = (props) => {
    const icon = props.weather.icon;
    let res = null
    switch (icon) {
        case "01d":
            res = sun;
            break;
        case "01n":
            res = moon;
            break;
        case "02d" :
        case "03d":
            res = partlysun;
            break;
        case "02n":
        case "03n":
            res = partlymoon;
            break;
        case "04d":
        case "04n":
            res = clouds;
            break;
        case "09d":
        case "09n":
            res = rain;
            break;
        case "10d":
            res = partlyRainSun;
            break;
        case "10n":
            res = partlyRainMoon;
            break;
        case "11d":
        case "11n":
            res = lighting;
            break;
        case "13d":
        case "13n":
            res = snowfall;
            break;
        case "50d":
        case "50n":
            res = mist;
            break;
    }

    return (
        <img
            src={res}
            className={props.class}
            alt=""
        />
    );
};

export default ImageStatus;
