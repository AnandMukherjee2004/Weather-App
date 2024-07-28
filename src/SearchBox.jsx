import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { responsiveFontSizes } from '@mui/material';

function SearchBox(props) {
    let [city, setCity] = useState("Delhi")

    const API_KEY = "85a47c673c3f9f4f03c75537c9474426";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let responseJson = await response.json()

        let result = {
            city: city,
            feelsLike: responseJson.main.feels_like,
            humidity: responseJson.main.humidity,
            pressure: responseJson.main.pressure,
            temp: responseJson.main.temp,
            temp_max: responseJson.main.temp_max,
            temp_min: responseJson.main.temp_min,
        }

        console.log(responseJson.main)
        console.log(result)
        return result;
    }

    const handleChange = (event) => {
        setCity(event.target.value)
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        setCity("")
        console.log(city)
        let info = await getWeatherInfo()
        await props.updateInfo(info)
    }
    return (
        <>
            <h2>Search For Weather</h2>
            <form action="">
                <TextField id="outlined-basic" label="city name" variant="outlined" required onChange={handleChange} />
                <br />
                <br />
                <Button onClick={handleSubmit} variant="contained" type='submit'>Search</Button>
            </form>


        </>
    )
}

export default SearchBox
