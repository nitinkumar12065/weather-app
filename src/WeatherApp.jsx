import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherApp(){
    const [weatherInfo ,setWeatherInfo]=useState({
        city:"Pune",
        fellslike:31.92,
        humidity:29,
        pressure:1008,
        temp:33.05,
        tempMax:33.05,
        tempMin:33.05,
        weather:"haze"    
    });
    let updateInfo=(newInfo)=>{
setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}} >
         <h2>Weather App by Yaduvanshi</h2>  
         <SearchBox updateInfo={updateInfo}/>
         <InfoBox info={weatherInfo}/>  
        </div>
    )
}