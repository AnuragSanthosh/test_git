// App.jsx
import axios from 'axios';
import React, { useState } from 'react';
import Weather from './Components/Weather';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const API_KEY = "6b13e4d7c9d5b9ec3274517220a48688";

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
      
      axios.get(url)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });

      setLocation("");
    }
  }

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex justify-center items-center">
      <div className="bg-white bg-opacity-25 rounded-lg p-8 shadow-xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Weather App</h2>
        <div className="text-center p-4">
          <input 
            type="text" 
            className="py-3 px-6 w-80 text-lg rounded-full border border-gray-200 text-gray-400 placeholder-gray-400 focus:outline-none bg-white bg-opacity-50 shadow-md"
            placeholder="Enter Location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyDown={searchLocation}
          />
        </div>
        <Weather weatherData={data} />
      </div>
    </div>
  );
}

export default App;
