import React from "react";
import weatherPng from "../../images/weather.png";
import "./weatherDetails.css";

const WeatherDetails = (props) => {
  console.log("props  :: ", props);
  const { cityDetails = {} } = props;

  const {
    main = {},
    name = "",
    sys = {},
    weather = [],
    wind = {},
  } = cityDetails;

  const { temp = "", pressure = "", humidity = "", feels_like = "" } = main;

  const { country = "" } = sys;

  const { main: description = "" } = weather?.length ? weather[0] : {};

  const { speed = 0 } = wind;

  return (
    <div className="weatherDetailsCard">
      <img src={weatherPng} height={"100"} />
      <div className="detailsRow">
        <div>
          <span>
            <b>City:</b> {name || "-"}
          </span>
        </div>
        <div>
          <span>
            <b>Country code:</b> {country || "-"}
          </span>
        </div>
        <div>
          <span>
            <b>Temperature:</b> {temp ? <span>{temp}&#xb0;C</span> : "-"}
          </span>
        </div>
        <div>
          <span>
            <b>Feels like:</b>{" "}
            {feels_like ? <span>{feels_like}&#xb0;C</span> : "-"}
          </span>
        </div>
        <div>
          <span>
            <b>Pressure:</b> {pressure || "-"}
          </span>
        </div>
        <div>
          <span>
            <b>Humidity:</b> {humidity ? humidity + "%" : "-"}
          </span>
        </div>
        <div>
          <span>
            <b>Wind speed:</b> {speed || "-"}
          </span>
        </div>
        <div>
          <span>
            <b>Type:</b> {description || "-"}
          </span>
        </div>
      </div>
    </div>
  );
};
export default WeatherDetails;
