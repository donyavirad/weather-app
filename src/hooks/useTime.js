import { useEffect } from "react"

const month = ['ژانویه','فوریه','مارس','آوریل','مه','ژوئن','جولای','اوت','سپتامبر','اکتبر','نوامبر','دسامبر']
const daysOfWeek = ['یک شنبه','دو شنبه','سه شنبه','چهار شنبه','پنج شنبه','جمعه','شنبه']

const useTime = (dt,...whatTime)=>{
    const time = new Date(dt * 1000)
    const year = time.getFullYear()
    const numberDay = time.getDate()
    let hour = time.getHours()
    let minutes = time.getMinutes()
    const indexDaysWeek = time.getDay()
    const indexMonth= time.getMonth()
    
    const res = []

    for(let item in whatTime){
        switch(whatTime[item]){
            case "year":
                res.push(year)
                break
            case "month": 
                res.push(month[indexMonth])
                break
            case "date":
                res.push(numberDay)
                break
            case "day":
                res.push(daysOfWeek[indexDaysWeek])
                break
            case "hours":
                if(hour < 10){
                    hour =`0${hour}`
                }
                res.push(hour)
                break
            case "minutes":
                if(minutes < 10){
                    minutes = `0${minutes}`
                }
                res.push(minutes)
                break
        }
    }
    
    return res
}

export default useTime