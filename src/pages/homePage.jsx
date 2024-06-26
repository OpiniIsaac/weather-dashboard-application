import CurrentWeatherComponent from "../components/CurrentWeatherComponent";

import WeatherForecast from "../components/WeatherForecast";

export default function HomePage() {
  // dummy data for weather forcust for 5 days 
  const dummyForecastData = [
    { date: "April 10, 2024", temperature: 20, humidity: 60, windSpeed: 5 },
    { date: "April 11, 2024", temperature: 22, humidity: 65, windSpeed: 6 },
    { date: "April 12, 2024", temperature: 18, humidity: 55, windSpeed: 4 },
    { date: "April 13, 2024", temperature: 25, humidity: 70, windSpeed: 7 },
    { date: "April 14, 2024", temperature: 23, humidity: 62, windSpeed: 6.5 },
  ];

  return (
    <div>

      {/* // component to display the current weather of city  */}
      <CurrentWeatherComponent />
      {/* // component to display weather forcust
      */}
      <WeatherForecast forecastData={dummyForecastData} />
    </div>
  );
}
