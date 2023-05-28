import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetCityNameCard from "./components/GetCityNameCard";
import WeatherDetails from "./components/WeatherDetails";
import Header from "./components/Header";
import axios from "axios";
import "./App.css";

const API_key = "61b5c4fe3d7edd96b56f4b2a361cf7b1";

const weatherUrl = (city) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_key}`;
};

function App() {
  const [cityName, setCityName] = useState("");
  const [cityDetails, setCityDetails] = useState({});

  const findWeather = async (e) => {
    e.preventDefault();
    if (!cityName.trim()) {
      toast.error("All fields are required");
      return;
    }

    try {
      const { data } = await axios.get(weatherUrl(cityName));
      console.log("data :: ", data);
      if (data) {
        setCityDetails(data);
      }
      setCityName("");
    } catch (error) {
      console.error(error);
      const errorMsg =
        error?.response?.data?.message || error?.message || error;
      toast.error(errorMsg);
    }
  };

  console.log("cityName  :: ", cityName);
  console.log("cityDetails  :: ", cityDetails);

  return (
    <div>
      <ToastContainer autoClose={2000} />
      <Header title="Weather Finder" />
      <div className="container">
        <p>
          The ultimate goal of weather forecasting is to protect human lives and
          property, improve health, safety, and economic prosperity.
        </p>
        <div className="weatherInputCard">
          <GetCityNameCard
            cityName={cityName}
            setCityName={setCityName}
            findWeather={findWeather}
          />
        </div>
        {cityDetails && Object.keys(cityDetails)?.length ? (
          <div className="cardsList">
            <WeatherDetails cityDetails={cityDetails} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
