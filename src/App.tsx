import React from 'react';
import {
  Cloud,
  CloudDrizzle,
  CloudLightning,
  CloudRain,
  CloudSnow,
  Sun,
  Thermometer,
  Wind,
  Droplets,
} from 'lucide-react';

// Mock weather data
const currentWeather = {
  temperature: 22,
  condition: 'Partly Cloudy',
  humidity: 65,
  windSpeed: 12,
  location: 'San Francisco, CA',
};

const forecast = [
  { day: 'Tomorrow', temp: 23, condition: 'Sunny' },
  { day: 'Wednesday', temp: 20, condition: 'Rain' },
  { day: 'Thursday', temp: 19, condition: 'Cloudy' },
  { day: 'Friday', temp: 21, condition: 'Storm' },
  { day: 'Saturday', temp: 18, condition: 'Snow' },
];

const getWeatherIcon = (condition: string) => {
  switch (condition.toLowerCase()) {
    case 'sunny':
      return <Sun className="w-8 h-8 text-yellow-500" />;
    case 'rain':
      return <CloudRain className="w-8 h-8 text-blue-500" />;
    case 'cloudy':
      return <Cloud className="w-8 h-8 text-gray-500" />;
    case 'storm':
      return <CloudLightning className="w-8 h-8 text-purple-500" />;
    case 'snow':
      return <CloudSnow className="w-8 h-8 text-blue-300" />;
    case 'drizzle':
      return <CloudDrizzle className="w-8 h-8 text-blue-400" />;
    default:
      return <Cloud className="w-8 h-8 text-gray-500" />;
  }
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Current Weather Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{currentWeather.location}</h1>
              <p className="text-gray-500 mt-1">Today's Weather</p>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <Thermometer className="w-8 h-8 text-red-500 mr-2" />
              <span className="text-4xl font-bold text-gray-800">{currentWeather.temperature}°C</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center bg-blue-50 rounded-xl p-4">
              <Wind className="w-6 h-6 text-blue-500 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Wind Speed</p>
                <p className="text-lg font-semibold">{currentWeather.windSpeed} km/h</p>
              </div>
            </div>
            <div className="flex items-center bg-blue-50 rounded-xl p-4">
              <Droplets className="w-6 h-6 text-blue-500 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Humidity</p>
                <p className="text-lg font-semibold">{currentWeather.humidity}%</p>
              </div>
            </div>
            <div className="flex items-center bg-blue-50 rounded-xl p-4">
              <Cloud className="w-6 h-6 text-blue-500 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Condition</p>
                <p className="text-lg font-semibold">{currentWeather.condition}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Forecast Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">5-Day Forecast</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {forecast.map((day) => (
              <div
                key={day.day}
                className="bg-blue-50 rounded-xl p-4 flex flex-col items-center"
              >
                <p className="text-gray-600 font-medium">{day.day}</p>
                {getWeatherIcon(day.condition)}
                <p className="text-xl font-bold mt-2">{day.temp}°C</p>
                <p className="text-sm text-gray-500">{day.condition}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;