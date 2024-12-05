import { useState, useEffect } from "react";

const cities = ["Hyderabad", "Rajahmundry", "Lucknow", "Raipur"];

 const  Weather = () => {
  const [weather, setWeather] = useState(null);
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  const getWeatherData = async (city) => {
    console.log(`Fetching data from weather api for city: ${city}`);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8dee0dbf17f272e4fefa8df470a7aa56&units=metric`
      );
      const data = await response.json();
      const { temp, temp_max, temp_min } = data.main;
      const { description } = data.weather[0];
      return { temp, temp_max, temp_min, description };
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchWeather(selectedCity);
  }, [selectedCity]);

  const fetchWeather = async (city) => {
    try {
      const data = await getWeatherData(city);
      setWeather(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCity = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    fetchWeather(city);
  };

  return (
    <div>
      <select onChange={handleCity} value={selectedCity}>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <br />
      <p data-testid="weather-result">
        {weather
          ? `${weather.description}, ${weather.temp}°C (Max ${weather.temp_max}, Min ${weather.temp_min})`
          : "Loading..."}
      </p>
    </div>
  );
}

export default Weather