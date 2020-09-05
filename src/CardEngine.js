import React from "react";
import Card from "./Card.js";

const CardEngine = (props) => {
  const [weather, setWeather] = React.useState({
    city: "",
    temp: 0,
    country: "",
    feels_like: null,
    forecast: null,
  });
  const location = props.location;

  async function handleChange(input) {
    const query = `${input}`;
    try {
      const data = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=e4d914bebb045b13379b2ad11024d1d6`
      );
      const parsedData = await data.json();
      setWeather({
        city: parsedData.name,
        country: parsedData.sys.country,
        temp: parsedData.main.temp,
        feels_like: parsedData.main.feels_like,
        forecast: parsedData.weather[0].main,
      });
    } catch (err) {
      console.log(err);
    }
  }
  React.useEffect(() => handleChange(location), [location]);

  return <Card handleChange={handleChange} weather={weather} />;
};

export default CardEngine;
