import React, { useState, useEffect } from "react";
import '@fontsource/poppins';
import axios from "axios";
import 'aos/dist/aos.css';
import weather from "../assets/img/background-weather.webp"

const Weather = () => {
  const [city, setCity] = useState("Sidoarjo");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isShiftedRight, setIsShiftedRight] = useState(false); // Shift card cuaca ke kanan
  const [isShiftedLeft, setIsShiftedLeft] = useState(false); // Shift card baru ke kiri

  const cities = [
    "Surabaya",
    "Malang",
    "Sidoarjo",
    "Gresik",
    "Banyuwangi",
    "Jember",
    "Mojokerto",
    "Probolinggo",
    "Blitar",
    "Kediri",
    "Lamongan",
    "Madiun",
    "Tulungagung",
    "Pasuruan",
    "Bojonegoro",
  ];

  const fetchWeather = async (cityName) => {
    try {
      const API_KEY = "43732aa7e32730192a13dfae9c31d9a3";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

      setLoading(true);
      const response = await axios.get(url);
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setError("Tidak dapat mengambil data cuaca");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleBackdropClick = () => {
    setIsShiftedRight((prev) => !prev); // Toggle pergeseran cuaca ke kanan
    setIsShiftedLeft((prev) => !prev); // Toggle pergeseran card baru ke kiri
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-center bg-no-repeat bg-cover font-poppins"
      style={{ backgroundImage: `url(${weather})` }}
      >
      <div className="flex flex-col items-center justify-center h-screen w-full bg-[#07754E] opacity-90">
          <h1 className="text-4xl font-bold relative bottom-52 text-white text-center mb-[-15px]">
          Cuaca Hari Ini di Kota-Kota Jawa Timur
          </h1>
        <select
          value={city}
          onChange={handleCityChange}
          className="relative bottom-40 p-2 mb-20 lg:mb-16 rounded-full shadow-lg text-center text-white border-0 focus:outline-none bg-white/30 backdrop-blur-md">
          {cities.map((cityName) => (
            <option key={cityName} value={cityName} className="text-black">
              {cityName}
            </option>
          ))}
        </select>

        <div
          className={`absolute mx-auto max-h-80 max-w-[40rem] p-8 text-start bg-transparent transition-transform duration-100 ${
            isShiftedLeft ? "-translate-x-80 block" : "translate-x-0 hidden"
          } mt-6`} >
          <h2 className="text-2xl font-bold mb-4 text-white text-start" >
          Jangan Lupa Menyiram Tanaman !!
          </h2>
          <p className="text-lg mb-4 text-white text-justify">
          Periksa kelembapan tanah Anda! Jika tanah kering, segera siram tanaman untuk menjaga kesehatan dan pertumbuhannya. Pastikan tidak menyiram saat hujan!
          </p>
        </div>

        {weatherData && (
          <div
            className={`absolute bg-white/35 p-8 rounded-lg shadow-lg text-center backdrop-blur-md transition-transform duration-500 ${
              isShiftedRight ? "translate-x-80" : "translate-x-0"
            }`} onClick={handleBackdropClick}>
            <h2 className="text-3xl font-bold mb-4 text-green-800">
              {weatherData.name}
            </h2>
            <h3 className="text-5xl font-semibold text-red-500 mb-4">
              {weatherData.main.temp}°C
            </h3>
            <p className="text-xl font-medium capitalize mb-4 text-green-800">
              {weatherData.weather[0].description}
            </p>
            <p className="text-md text-white">
              Kecepatan Angin: {weatherData.wind.speed} m/s
            </p>
            <p className="text-md text-white">
              Kelembaban: {weatherData.main.humidity}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
