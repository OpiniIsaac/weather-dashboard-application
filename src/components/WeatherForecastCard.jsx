
import { Card, CardContent, Typography, Box } from '@mui/material';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import GrainIcon from '@mui/icons-material/Grain';
import AirIcon from '@mui/icons-material/Air';

const WeatherForecastCard = ({ day }) => {
 return (
    <Card variant="outlined" sx={{ marginRight: 2, flexShrink: 0 }}>
      <CardContent>
        <Typography variant="subtitle1">{day.date}</Typography>
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
    </Card>
 );
};

export default WeatherForecastCard;
