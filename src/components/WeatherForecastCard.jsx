import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import GrainIcon from '@mui/icons-material/Grain';
import AirIcon from '@mui/icons-material/Air';

const StyledCard = styled(Card)(({ theme }) => ({
 backgroundColor: theme.palette.background.default,
 boxShadow: theme.shadows[3],
 marginRight: theme.spacing(2),
 flexShrink: 0,
 minWidth: 200,
 '&:hover': {
    boxShadow: theme.shadows[8],
    transform: 'scale(1.05) translateY(-2.5%)', // Adjust translateY as needed
 },
 transition: 'transform 0.3s ease-in-out',
}));

const WeatherForecastCard = ({ day }) => {
 return (
    <StyledCard variant="outlined">
      <CardContent>
        <Typography variant="subtitle1" gutterBottom>
          {day.date}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
          <DeviceThermostatIcon fontSize="small" sx={{ marginRight: 1 }} />
          <Typography variant="body2">Temperature: {day.temperature} °C</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
          <GrainIcon fontSize="small" sx={{ marginRight: 1 }} />
          <Typography variant="body2">Humidity: {day.humidity}%</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AirIcon fontSize="small" sx={{ marginRight: 1 }} />
          <Typography variant="body2">Wind Speed: {day.windSpeed} m/s</Typography>
        </Box>
      </CardContent>
    </StyledCard>
 );
};

WeatherForecastCard.propTypes = {
 day: PropTypes.shape({
    date: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
 }).isRequired,
};

export default WeatherForecastCard;
