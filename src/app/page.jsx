"use client";
import Searchbar from "@/components/Searchbar";
import SearchHistory from "@/components/SearchHistory";
import WeatherCard from "@/components/WeatherCard";
import { AlertCircle, CloudSun } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);

  // Function to set the user searched city history
  const saveToHistory = (city) => {
    const newHistory = [
      city,
      ...history.filter((c) => c.toLowerCase() !== city.toLowerCase()),
    ].slice(0, 5);

    setHistory(newHistory);
    localStorage.setItem("searchHistory", JSON.stringify(newHistory));
  };

  // Function to clear the History from localstorage
  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("searchHistory");
  };

  // Function to fetch the weather info
  const fetchWeather = async (city) => {
    try {
      setLoading(true);

      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`,
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(
            `City "${city}" not found. Please check the spelling and try again.`,
          );
        }
        throw new Error("Unable to fetch weather data. Please try again.");
      }

      const data = await response.json();
      setWeather(data);
      saveToHistory(data.name);
      setError(null);
      // console.log(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // Re Initializing the Stored History Array
  useEffect(() => {
    const savedHistory = localStorage.getItem("searchHistory");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-8 gap-2">
            <CloudSun size={40} />
            <h1 className="text-5xl font-bold">Weather App</h1>
          </div>

          <p className=" text-lg mb-8 text-center">
            Search for any city to see current weather conditions
          </p>

          {/* Search Bar */}
          <Searchbar onCitySearched={fetchWeather} />

          {/* Search history */}
          <SearchHistory
            onCitySearched={fetchWeather}
            history={history}
            clearHistory={clearHistory}
          />
          {loading && (
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-black border-t-transparent"></div>
              <p className="text-black mt-4 text-lg">Loading weather data...</p>
            </div>
          )}

          {error && !loading && (
            <div className="w-full max-w-2xl bg-red-50 border-2 border-red-200 rounded-2xl p-6 flex items-start space-x-4 shadow-lg mt-8">
              <AlertCircle className="text-red-500 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-red-800 font-semibold text-lg mb-1">
                  Error
                </h3>
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          )}

          {/* Weather Card */}
          {weather && !loading && !error && <WeatherCard weather={weather} />}

          {!weather && !loading && !error && (
            <div className="text-center text-black mt-12">
              <p className="text-lg">Enter a city name above to get started</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
