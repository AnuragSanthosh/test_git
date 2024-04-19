// Weather.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({ weatherData }) => {
  return (
    <div className="mt-8">
      {weatherData.weather ? (
        <div className="bg-gray-800 bg-opacity-25 rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">{weatherData.name} Weather Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center p-4 rounded-lg bg-blue-200 bg-opacity-50">
              <p className="text-lg mr-2 text-gray-800">Temperature:</p>
              <p className="text-lg font-semibold text-gray-800">{weatherData.main.temp} K</p>
            </div>
            <div className="flex items-center justify-center p-4 rounded-lg bg-blue-200 bg-opacity-50">
              <p className="text-lg mr-2 text-gray-800">Description:</p>
              <div className="flex items-center">
                <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="Weather Icon" className="w-8 h-8 mr-2" />
                <p className="text-lg font-semibold text-gray-800">{weatherData.weather[0].description}</p>
              </div>
            </div>
            <div className="flex items-center justify-center p-4 rounded-lg bg-blue-200 bg-opacity-50">
              <p className="text-lg mr-2 text-gray-800">Humidity:</p>
              <p className="text-lg font-semibold text-gray-800">{weatherData.main.humidity}%</p>
            </div>
            <div className="flex items-center justify-center p-4 rounded-lg bg-blue-200 bg-opacity-50">
              <p className="text-lg mr-2 text-gray-800">Wind Speed:</p>
              <p className="text-lg font-semibold text-gray-800">{weatherData.wind.speed} m/s</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

Weather.propTypes = {
  weatherData: PropTypes.shape({
    name: PropTypes.string,
    main: PropTypes.shape({
      temp: PropTypes.number,
      humidity: PropTypes.number
    }),
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        icon: PropTypes.string
      })
    ),
    wind: PropTypes.shape({
      speed: PropTypes.number
    })
  })
};

export default Weather;
