import { History, X } from "lucide-react";

const SearchHistory = () => {
  return (
    <div className="w-full max-w-2xl mt-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2 text-gray-600">
          <History size={18} />
          <span className="text-sm font-medium">Recent Searches</span>
        </div>
        <button className="text-sm text-gray-500 hover:text-red-500 transition-colors flex items-center space-x-1 cursor-pointer">
          <X size={16} />
          <span>Clear</span>
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        <button className="px-4 py-2 cursor-pointer bg-white border-2 border-gray-200 text-gray-700 rounded-full hover:border-blue-500 hover:text-blue-600 transition-colors text-sm font-medium shadow-sm">
          Mumbai
        </button>
        <button className="px-4 py-2 cursor-pointer bg-white border-2 border-gray-200 text-gray-700 rounded-full hover:border-blue-500 hover:text-blue-600 transition-colors text-sm font-medium shadow-sm">
          Delhi
        </button>
        <button className="px-4 py-2 cursor-pointer bg-white border-2 border-gray-200 text-gray-700 rounded-full hover:border-blue-500 hover:text-blue-600 transition-colors text-sm font-medium shadow-sm">
          Gujarat
        </button>
        <button className="px-4 py-2 cursor-pointer bg-white border-2 border-gray-200 text-gray-700 rounded-full hover:border-blue-500 hover:text-blue-600 transition-colors text-sm font-medium shadow-sm">
          Bangalore
        </button>
        <button className="px-4 py-2 cursor-pointer bg-white border-2 border-gray-200 text-gray-700 rounded-full hover:border-blue-500 hover:text-blue-600 transition-colors text-sm font-medium shadow-sm">
          Pune
        </button>
      </div>
    </div>
  );
};

export default SearchHistory;
