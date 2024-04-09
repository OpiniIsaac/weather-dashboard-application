import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import { Grain, Air } from '@mui/icons-material';
import { fetchWeatherData } from '../service/fetchWeather';


export default function WeatherPage() {
  const [searchInput, setSearchInput] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const color = grey[500];

  const handleSearch = async () => {
    try {
      const data = await fetchWeatherData(searchInput);
      if (data) {
        setWeatherData(data);
        console.log(data)
      } else {
        // Handle error or display a message for invalid input
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      // Handle error
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <Search color={color}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search city..."
          inputProps={{ 'aria-label': 'search' }}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
      </Search>

      {weatherData && (
        <Card variant="outlined" sx={{ maxWidth: 300, marginTop: 20 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Current Weather in {searchInput}
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
              <DeviceThermostatIcon fontSize="small" sx={{ marginRight: 1 }} />
              <Typography variant="body1">Temperature: {weatherData.main.temp} °C</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
              <Grain fontSize="small" sx={{ marginRight: 1 }} />
              <Typography variant="body1">Humidity: {weatherData.main.humidity}%</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Air fontSize="small" sx={{ marginRight: 1 }} />
              <Typography variant="body1">Wind Speed: {weatherData.wind.speed} m/s</Typography>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
