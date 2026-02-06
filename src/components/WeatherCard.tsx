import { Droplets, Thermometer } from "lucide-react";

const WeatherCard = () => {
  return (
    <div className="w-full max-w-2xl bg-gradient-to-b from-gray-100 to-gray-300 rounded-3xl shadow-xl p-8 mt-10">
      <div className="flex flex-col items-center">
        {/* City info */}
        <div className="flex items-center justify-between w-full mb-6">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">
              Mumbai
              <span className="text-2xl text-gray-500 ml-2">IN</span>
            </h2>
            <p className="text-xl text-gray-600 capitalize mt-2">SMOKE</p>
          </div>
          <img
            src="https://openweathermap.org/img/wn/50d@4x.png"
            alt="smoke"
            className="w-32 h-32 -mr-4"
          />
        </div>

        {/* Weather Info */}
        <div className="text-7xl font-bold text-gray-800 mb-8">33°C</div>

        <div className="flex gap-10">
          <div className="bg-gray-200 shadow-sm rounded-2xl border border-black p-5 flex items-center space-x-4">
            <div className="bg-white rounded-full p-3">
              <Thermometer size={24} color="#E57373" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Feels Like</p>
              <p className="text-2xl font-semibold text-gray-800">30°C</p>
            </div>
          </div>
          <div className="bg-gray-200 shadow-sm rounded-2xl border border-black p-5 flex items-center space-x-4">
            <div className="bg-white rounded-full p-3">
              <Droplets size={24} color="#64B5F6" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Humidity</p>
              <p className="text-2xl font-semibold text-gray-800">24%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
