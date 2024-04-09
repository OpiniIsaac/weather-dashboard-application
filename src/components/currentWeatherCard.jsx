import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import {DeviceThermostatIcon, Grain, Air } from '@mui/icons-material';


const CurrentWeather = ({ temperature, humidity, windSpeed }) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 300 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Current Weather
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
          <DeviceThermostatIcon fontSize="small" sx={{ marginRight: 1 }} />
          <Typography variant="body1">Temperature: {temperature} °C</Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
          <Grain fontSize="small" sx={{ marginRight: 1 }} />
          <Typography variant="body1">Humidity: {humidity}%</Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Air fontSize="small" sx={{ marginRight: 1 }} />
          <Typography variant="body1">Wind Speed: {windSpeed} m/s</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;
