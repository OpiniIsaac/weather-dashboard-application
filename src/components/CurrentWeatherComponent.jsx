import  { useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import GrainIcon from '@mui/icons-material/Grain';
import AirIcon from '@mui/icons-material/Air';
import { fetchWeatherData } from '../service/fetchWeather';
import SearchComponent from './Search';
import StyledSearchIconWrapperComponent from './SearchIconWrapper';

export default function CurrentWeatherComponent() {
 const [searchInput, setSearchInput] = useState('');
 const [weatherData, setWeatherData] = useState({
    main: {
      temp: 'N/A',
      humidity: 'N/A',
    },
    wind: {
      speed: 'N/A',
    },
 });
 const color = '#FFFFFF'; // Modern authentic color

 const handleSearch = async () => {
    try {
      const data = await fetchWeatherData(searchInput);
      if (data) {
        setWeatherData(data);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
 };

 return (
    <Box sx={{ padding: 2, maxWidth: 600, margin: 'auto' }}>
      <SearchComponent color={color}>
        <StyledSearchIconWrapperComponent>
          <SearchIcon />
        </StyledSearchIconWrapperComponent>
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
      </SearchComponent>

      {weatherData && (
        <Card variant="outlined" sx={{ maxWidth: 300, marginTop: 2, backgroundColor: '#F0F2F5' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ color: '#333333' }}>
              Current Weather in {searchInput}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
              <DeviceThermostatIcon fontSize="small" sx={{ marginRight: 1 }} />
              <Typography variant="body1" sx={{ color: '#333333' }}>Temperature: {weatherData.main.temp} °C</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
              <GrainIcon fontSize="small" sx={{ marginRight: 1 }} />
              <Typography variant="body1" sx={{ color: '#333333' }}>Humidity: {weatherData.main.humidity}%</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AirIcon fontSize="small" sx={{ marginRight: 1 }} />
              <Typography variant="body1" sx={{ color: '#333333' }}>Wind Speed: {weatherData.wind.speed} m/s</Typography>
            </Box>
          </CardContent>
        </Card>
      )}
    </Box>
 );
}

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
