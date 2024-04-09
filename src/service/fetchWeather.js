
// Function to fetch weather data for a specific city
async function fetchWeatherData(cityName) {
    const apiKey = 'ac6be0e62d8605a0e90e06d1f44ae0af'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  }
  
  export { fetchWeatherData };
  