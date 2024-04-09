import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Grain, Air } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
const WeatherForecast = ({ forecastData }) => {
  const theme = useTheme();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Weather Forecast for 5 Days
      </Typography>
      <Box sx={{ display: 'flex', overflowX: 'scroll', scrollbarWidth: 'none' }}>
        {forecastData.map((day, index) => (
          <Card key={index} variant="outlined" sx={{ marginRight: 2, flexShrink: 0 }}>
            <CardContent>
              <Typography variant="subtitle1">{day.date}</Typography>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 5 }}>
                <DeviceThermostatIcon fontSize="small" sx={{ marginRight: 1 }} />
                <Typography variant="body2">Temperature: {day.temperature} °C</Typography>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 5 }}>
                <Grain fontSize="small" sx={{ marginRight: 1 }} />
                <Typography variant="body2">Humidity: {day.humidity}%</Typography>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Air fontSize="small" sx={{ marginRight: 1 }} />
                <Typography variant="body2">Wind Speed: {day.windSpeed} m/s</Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default WeatherForecast;
