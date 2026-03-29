import { useState, useEffect } from "react";
import "./App.css";
import { getOrbType, formatClock } from "./utils/weather";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import HeroCard from "./components/HeroCard";
import HourlyForecast from "./components/HourlyForecast";
import AirConditions from "./components/AirConditions";
import WeekForecast from "./components/WeekForecast";
import Toast from "./components/Toast";

const App = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState(formatClock());

  useEffect(() => {
    const id = setInterval(() => setTime(formatClock()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (weatherData) {
      setVisible(false);
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    }
  }, [weatherData]);

  const handleSearch = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?unitGroup=metric&key=${API_KEY}&contentType=json`
      );
      if (!res.ok) throw new Error();
      const data = await res.json();
      if (data.errorCode) throw new Error();
      setWeatherData(data);
    } catch {
      setError(`Couldn't find "${city}". Check the city name and try again.`);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const cond = weatherData?.currentConditions?.conditions ?? "";
  const precip = weatherData?.currentConditions?.precipprob ?? 0;
  const orbType = weatherData ? getOrbType(cond, precip) : null;

  return (
    <div className="app">
      {error && <Toast message={error} onClose={() => setError(null)} />}
      <Sidebar />
      <main className="main">
        <SearchBar city={city} setCity={setCity} onSearch={handleSearch} loading={loading} time={time} />
        <HeroCard data={weatherData} orbType={orbType} visible={visible} />
        <HourlyForecast data={weatherData} visible={visible} />
        <AirConditions data={weatherData} visible={visible} />
      </main>
      <WeekForecast data={weatherData} visible={visible} />
    </div>
  );
};

export default App;