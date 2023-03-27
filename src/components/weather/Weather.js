import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTint, FaThermometerHalf, FaCloud } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiErrorAlt } from "react-icons/bi";
import "./Weather.css";

const Weather = () => {
  const [city, setCity] = useState("Brasília"); // Inicializa com "Brasília"
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const apiKey = "c55bb6fb08629a41d85df069e0ff191c";

  useEffect(() => {
    // Define a URL da API com base na cidade selecionada e na chave da API
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Faz uma solicitação GET para a API do OpenWeatherMap usando axios
    axios
      .get(apiUrl)
      .then((response) => {
        // Atualiza o estado com os dados do clima retornados pela API
        setWeatherData(response.data);
      })
      .catch((error) => {
        // Registra o erro no console e define o estado de erro como true
        console.log(error);
        setError(true);
      });
  }, [city]);

  useEffect(() => {
    // Obtém os dados climáticos com base na localização atual do usuário
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios
          .get(apiUrl)
          .then((response) => {
            setWeatherData(response.data);
            setCity(response.data.name);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      },
       // Caso não seja possível obter a localização, obtém os dados climáticos da cidade de Brasília
      () => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Brasilia&appid=${apiKey}&units=metric`;
        axios
          .get(apiUrl)
          .then((response) => {
            setWeatherData(response.data);
            setCity(response.data.name);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      }
    );
  }, [apiKey]);

  // Retorna a imagem animada de acordo com a condição climática
  const getWeatherImg = () => {
    const weatherCondition = weatherData?.weather[0].main;
  
    switch (weatherCondition) {
      case "Thunderstorm":
        return "https://media.tenor.com/B14wu9T3Dp8AAAAC/storm-staring.gif";
      case "Drizzle":
        return "https://media.tenor.com/xQu_Gj4VDckAAAAC/good-morning-morning.gif";
      case "Rain":
        return "https://media.tenor.com/mhg3aOcivSEAAAAC/dog-raining.gif";
      case "Snow":
        return "//ellehansendotcom.files.wordpress.com/2021/09/2020holidaydog1x1_v03_eh-1.gif";
      case "Atmosphere":
        return "https://media.tenor.com/RHiJpN34A3IAAAAC/foggy-fog.gif";
      case "Clear":
        return "https://media.tenor.com/a-Aa1I_-MbYAAAAC/window-plants.gif";
      case "Clouds":
        return "https://ellehansendotcom.files.wordpress.com/2021/09/thanksgiving2020_v04_eh.gif?w=500";
      default:
        return "https://media.tenor.com/9pCiAd-nqIQAAAAC/bird-under-the-rain.gif";
    }
  };

  return (
    <div className="weather-container">
      {loading ? (
        <div class="loading-container">
          <i class="fas fa-spinner fa-pulse">
            <AiOutlineLoading3Quarters />
          </i>
          <p>Carregando...</p>
        </div>
      ) : error ? (
        <div class="error-container">
          <BiErrorAlt />
          <p>
            Houve um erro ao carregar os dados. Por favor, verifique sua conexão
            com a internet e tente novamente.
          </p>
        </div>
      ) : (
        <div className="weather-wrapper">
          <div className="weather-img">
            <img
              src={getWeatherImg()}
              alt="Weather animation"
              className="weather-animation"
            />
          </div>
          <div className="weather-info">
            <h1 className="city-name weather-status">{weatherData.name}</h1>
            <p className="temperature weather-status">
              <FaThermometerHalf className="icon" /> {weatherData.main.temp}°C
            </p>
            <p className="humidity weather-status">
              <FaTint className="icon" /> {weatherData.main.humidity}%
            </p>
            <p className="weather-description weather-status">
              <FaCloud className="icon" /> {weatherData.weather[0].description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
