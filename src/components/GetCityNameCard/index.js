import React from "react";
import Button from "../Button";
import Input from "../Input";
import "./getCityNameCard.css";

const GetCityNameCard = ({
  cityName = "",
  setCityName = () => {},
  findWeather = () => {},
}) => {
  return (
    <form>
      <Input
        id="name"
        placeholder="Enter city name..."
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        autoFocus={true}
      />

      <Button name={`Find Weather`} onClick={(e) => findWeather(e)} />
    </form>
  );
};
export default GetCityNameCard;
