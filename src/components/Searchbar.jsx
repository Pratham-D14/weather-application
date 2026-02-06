import { Search } from "lucide-react";
import { useState } from "react";

const Searchbar = ({ onCitySearched }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) onCitySearched(city.trim());
  };
  return (
    <form className="w-full max-w-2xl" onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="text"
          value={city}
          placeholder="Search for a city..."
          onChange={(e) => setCity(e.currentTarget.value)}
          className="w-full px-6 py-4 pr-14 text-lg rounded-2xl border-2 border-gray-200 focus:border-black-500 focus:outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed shadow-sm"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-gray-500  rounded-xl hover:bg-gray-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors cursor-pointer"
          aria-label="Search"
        >
          <Search size={20} />
        </button>
      </div>
    </form>
  );
};

export default Searchbar;
