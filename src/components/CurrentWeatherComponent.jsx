import  { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import { Grain, Air } from '@mui/icons-material';
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
  const color = grey[500];

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
    <div style={{ padding: 20 }}>
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



// 

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
