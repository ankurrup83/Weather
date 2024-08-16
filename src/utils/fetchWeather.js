// import axios from 'axios';

// const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

// export const fetchWeather = async (city) => {
//   try {
//     const response = await axios.get(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
//     );
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching weather data:', error);
//     return { error: 'City not found' };
//   }
// };


const dummyWeatherData = {
    'New York': {
      name: 'New York',
      main: { temp: 22, humidity: 60 },
      weather: [{ description: 'Clear sky' }],
      wind: { speed: 5 },
    },
    'London': {
      name: 'London',
      main: { temp: 15, humidity: 75 },
      weather: [{ description: 'Rain' }],
      wind: { speed: 10 },
    },
    'Tokyo': {
      name: 'Tokyo',
      main: { temp: 28, humidity: 65 },
      weather: [{ description: 'Partly cloudy' }],
      wind: { speed: 3 },
    },
    'Delhi': {
      name: 'Delhi',
      main: { temp: 35, humidity: 50 },
      weather: [{ description: 'Sunny' }],
      wind: { speed: 8 },
    },
  };
  
  export const fetchWeather = async (city) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = dummyWeatherData[city];
        if (data) {
          resolve(data);
        } else {
          resolve({ error: 'City not found' });
        }
      }, 1000);
    });
  };
  