import React, { useState } from "react";
import Form from "./Form";
import Card from "./Card";
const WeatherPanel = () => {
  let urlWeather =
    "https://api.openweathermap.org/data/2.5/weather?appid=532900ce283487f7d5ee82645feefac1&lang=es";
  let cityUrl = "&q=";
  let urlForecast =
    "https://api.openweathermap.org/data/2.5/forecast?appid=532900ce283487f7d5ee82645feefac1&lang=es";
  const [weather, setWeather] = useState([]);
  const [forecast, setforecast] = useState([]);
  const [loading, setloading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setlocation] = useState("");
  const getLocation = async (loc) => {
    setloading(true);
    setlocation(loc);
    //weather
    urlWeather = urlWeather + cityUrl + loc;
    await fetch(urlWeather)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((weatherData) => {
        setWeather(weatherData);
        console.log(weatherData);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
        setShow(false);
      });
    // forescast
    urlForecast = urlForecast + cityUrl + loc;
    await fetch(urlForecast)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((forecastData) => {
        setforecast(forecastData);
        console.log(forecastData);
        setloading(false);
        setShow(true);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
        setShow(false);
      });
  };
  return(
    <React.Fragment>
        <Form
        newLocation={getLocation}
        />
        <Card 
        showData={show}
        loadingData={loading}
        forecast={forecast}
        weather={weather}
        />
    </React.Fragment>
  )
};
export default WeatherPanel
