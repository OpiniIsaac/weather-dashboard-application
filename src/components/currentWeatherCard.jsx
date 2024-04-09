
import { Card, CardContent, Typography } from '@mui/material';
import { WiThermometer, WiHumidity, WiStrongWind } from 'react-icons/wi';

const CurrentWeather = ({ temperature, humidity, windSpeed }) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 300 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Current Weather
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
          <WiThermometer size={24} style={{ marginRight: 10 }} />
          <Typography variant="body1">Temperature: {temperature} °C</Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
          <WiHumidity size={24} style={{ marginRight: 10 }} />
          <Typography variant="body1">Humidity: {humidity}%</Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <WiStrongWind size={24} style={{ marginRight: 10 }} />
          <Typography variant="body1">Wind Speed: {windSpeed} m/s</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;
