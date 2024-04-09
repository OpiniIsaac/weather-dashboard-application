
import { Typography, Box } from '@mui/material';
import WeatherForecastCard from './WeatherForecastCard';
import PropTypes from 'prop-types';
const WeatherForecast = ({ forecastData }) => {
 return (
    <div>
      <Typography variant="h4" gutterBottom>
        Weather Forecast for 5 Days
      </Typography>
      <Box sx={{ display: 'flex', overflowX: 'scroll', scrollbarWidth: 'none' }}>
        {forecastData.map((day, index) => (
          <WeatherForecastCard key={index} day={day} />
        ))}
      </Box>
    </div>
 );
};

WeatherForecast.propTypes = {
  forecastData: PropTypes.arrayOf(
     PropTypes.shape({
       date: PropTypes.string.isRequired,
       temperature: PropTypes.string.isRequired,
       humidity: PropTypes.string.isRequired,
       windSpeed: PropTypes.string.isRequired,
     })
  ).isRequired,
 };

export default WeatherForecast;
