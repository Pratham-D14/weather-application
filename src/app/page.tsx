"use client";
import Searchbar from "@/components/Searchbar";
import SearchHistory from "@/components/SearchHistory";
import WeatherCard from "@/components/WeatherCard";
import { CloudSun } from "lucide-react";
import Image from "next/image";

export default function Home() {
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
          <Searchbar />

          {/* Search history */}
          <SearchHistory />

          {/* Weather Card */}
          <WeatherCard />
        </div>
      </div>
    </div>
  );
}
