import React from 'react';
import { Container } from 'react-bootstrap';

const CityWeather = ({cityWeather,click}) => {
    // console.log("abcd",weatherDes);
    const [city,setCity]=React.useState("");
    const [humidity,setHumidity]=React.useState("");
    const [temperature,setTemperature]=React.useState(""); 
    const [minTemperature,setMinTemperature]=React.useState("");
    const [maxTemperature,setMaxTemperature]=React.useState("");
    const [windSpeed,setWindSpeed]=React.useState("");

    React.useEffect(()=>{
        console.log("city Weather ",cityWeather);
        if(click && cityWeather.hasOwnProperty('weather')){
            setCity(cityWeather.name);
            setHumidity(cityWeather.main.humidity+" %");
            setTemperature((cityWeather.main.temp-273.15).toFixed(2)+` \u00b0C`);
            setMinTemperature((cityWeather.main.temp_min-273.15).toFixed(2)+` \u00b0C`);
            setMaxTemperature((cityWeather.main.temp_max-273.15).toFixed(2)+` \u00b0C`);
            setWindSpeed((cityWeather.wind.speed)+" km/h");
        }
    })
    return (
        <Container>
            <div>
                <div className="d-flex justify-content-between flex-wrap">
                    <p>City Name: {city}</p>
                    <p>Humidity: {humidity}</p>
                    <p>Temperature: {temperature}</p>
                    <p>Minimum Temperature: {minTemperature}</p>
                    <p>Maximum Temperature: {maxTemperature}</p>
                    <p>Wind Speed: {windSpeed}</p>
                </div>
            </div>
        </Container>
    );
};

export default CityWeather