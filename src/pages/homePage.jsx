
import CurrentWeather from '../components/currentWeatherCard'
import SearchBox from '../components/searchBox'

export default function HomePage() {
  return (
    <div>
      <SearchBox />
      <CurrentWeather humidity="100" temperature="3000" windSpeed="300" />
    </div>
  )
}
