import React, { useState } from "react";

const Card = (props) => {
  const [inputs, setInputs] = useState({
    city: null,
  });

  let highcolor;
  let lowcolor;
  if (props.weather.temp > 25) {
    highcolor = "rgba(255, 0, 0)";
    lowcolor = "rgba(255, 150, 0)";
  } else {
    highcolor = "rgba(0, 0, 255)";
    lowcolor = "rgba(0, 200, 255)";
  }

  const [inputMode, setInputMode] = useState(false);

  return (
    <div
      className="card"
      style={{
        background: `linear-gradient(to top, ${highcolor}, ${lowcolor})`,
      }}
    >
      {!inputMode ? (
        <div
          className="card-city card-country"
          onClick={() => {
            setInputMode(true);
          }}
        >
          <p>{props.weather.city ? props.weather.city : "Enter City Name"}</p>
          <p>{props.weather.country}</p>
          <p>Condition : {props.weather.forecast}</p>
          <div>{props.weather.icon}</div>
          <div className="card-temp">
            <p>Feels like: {props.weather.feels_like}°C</p>
            <p>Temp : {props.weather.temp}°C</p>
          </div>
        </div>
      ) : (
        <div className="card-city-input">
          <div>
            <label>
              <span>City</span>
              <input
                type="text"
                name="city"
                value={inputs.city}
                onChange={(e) => {
                  return setInputs({ city: e.target.value });
                }}
              />
            </label>
          </div>
          <div>
            <input
              type="submit"
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                setInputMode(false);
                props.handleChange(inputs.city);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
