import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({})

    const updateInfo = (resultInfo) => {
        setWeatherInfo(resultInfo)
    }
    return (
        <div className="weatherApp-container" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>

            <h2>Weather App by Anand</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <br />
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}

export default WeatherApp
