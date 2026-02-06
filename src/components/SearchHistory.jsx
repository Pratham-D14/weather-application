import { History, X } from "lucide-react";

const SearchHistory = ({ onCitySearched, history, clearHistory }) => {
  if (history.length === 0) return null;

  return (
    <div className="w-full max-w-2xl mt-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2 text-gray-600">
          <History size={18} />
          <span className="text-sm font-medium">Recent Searches</span>
        </div>
        <button
          className="text-sm text-gray-500 hover:text-red-500 transition-colors flex items-center space-x-1 cursor-pointer"
          onClick={clearHistory}
        >
          <X size={16} />
          <span>Clear</span>
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {history.map((city, index) => (
          <button
            key={`${city}-${index}`}
            onClick={() => onCitySearched(city)}
            className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-full hover:border-blue-500 hover:text-blue-600 transition-colors text-sm font-medium shadow-sm cursor-pointer"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;
