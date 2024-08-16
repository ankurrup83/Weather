// import axios from 'axios';

// const API_KEY = 'YOUR_API_KEY';

// export const fetchWeather = async (city) => {
//   try {
//     const response = await axios.get(
//       `https://api.openweathermap.org/data/2.5`
//     );
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching weather data:', error);
//     return { error: 'City not found' };
//   }
// };


// data is not there i the API so i created dummy data for the flow 


const dummyWeatherData = {
    'New York': {
      name: 'New York',
      main: {
        temp: 22,
        humidity: 65,
      },
      weather: [
        { description: 'clear sky' }
      ],
      wind: {
        speed: 3.5
      }
    },
    'London': {
      name: 'London',
      main: {
        temp: 18,
        humidity: 70,
      },
      weather: [
        { description: 'light rain' }
      ],
      wind: {
        speed: 4.1
      }
    },
    'Tokyo': {
      name: 'Tokyo',
      main: {
        temp: 25,
        humidity: 60,
      },
      weather: [
        { description: 'cloudy' }
      ],
      wind: {
        speed: 2.8
      }
    },
    'Delhi': {
      name: 'Delhi',
      main: {
        temp: 30,
        humidity: 55,
      },
      weather: [
        { description: 'haze' }
      ],
      wind: {
        speed: 1.5
      }
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
  
  export const getCitySuggestions = (query) => {
    return Object.keys(dummyWeatherData).filter((city) =>
      city.toLowerCase().startsWith(query.toLowerCase())
    );
  };
  
