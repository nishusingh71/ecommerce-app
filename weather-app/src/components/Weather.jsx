import React, { useEffect, useState } from "react";

export default function Weather() {
  const [cityName, setCityName] = useState([
    "London",
    "Noida",
    "Delhi",
    "Mumbai",
  ]);
  const [weather, setWeather] = useState(null);
  const fetchWeather = async (city) => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=06ed06b99e2d3146825c612c669450e7`
      );
      let data = await response.json();
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchWeather(cityName);
  }, [cityName]);

  const handleCityChange = (event) => {
    setCityName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather();
  };
  if (!weather) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="city">Choose a city:</label>
        <select name="city" id="city">
          <option value={cityName}>Noida</option>
          <option value={cityName}>Delhi</option>
          <option value={cityName}>Lucknow</option>
          <option value={cityName}>Up</option>
        </select>
        <input
          type="submit"
          placeholder="Enter City here"
          value="search"
          onChange={handleCityChange}
        />
      </form>
      <h1>{weather.name}</h1>
      <p>{weather.weather[0].description}</p>
      <p>Temperature: {weather.main.temp}</p>
      <p>Feels Like: {weather.main.feels_like}</p>
      <p>Humidity: {weather.main.humidity}</p>
    </div>
  );
}
