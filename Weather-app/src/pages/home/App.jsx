import { useState } from 'react'

import './style.js'
import { Main, Header, DropdownContainer, DropdownMenu, Button, ButtonUnits, SearchContainer, SearchInputWrapper, SearchInput, SearchButton, WeatherInfoContainer, DailyForecast, DailyForecastContainer, TodayWeather, HourlyForecastContainer, WeatherGrid, DropdownDaysMenu, HourlyForecast
 } from './style.js'
import WeatherInfoCard from '../../components/index.jsx'
import IconUnits from '../../assets/images/icon-units.svg'
import IconDropdown from '../../assets/images/icon-dropdown.svg'
import IconCheckMark from '../../assets/images/icon-checkmark.svg'
import IconSearch from '../../assets/images/icon-search.svg'
import SunnyIcon from '../../assets/images/icon-sunny.webp'
import DrizzleIcon from '../../assets/images/icon-drizzle.webp'
import FogIcon from '../../assets/images/icon-fog.webp'
import OvercastIcon from '../../assets/images/icon-overcast.webp'
import PartlyCloudyIcon from '../../assets/images/icon-partly-cloudy.webp'
import RainIcon from '../../assets/images/icon-rain.webp'
import SnowIcon from '../../assets/images/icon-snow.webp'
import StormIcon from '../../assets/images/icon-storm.webp'
import logo from '../../assets/images/logo.svg'

function App() {
  const [isImperial, setIsImperial] = useState(false)
  const [isUnitsMenuOpen, setIsUnitsMenuOpen] = useState(false)
  const [temperatureUnit, setTemperatureUnit] = useState('Celsius')
  const [windSpeedUnit, setWindSpeedUnit] = useState('km/h')
  const [precipitationUnit, setPrecipitationUnit] = useState('mm')
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState('') 
  const [isDaysMenuOpen, setIsDaysMenuOpen] = useState(false)
  const [dayMenu, setDayMenu] = useState('Monday')

  const weatherCodes = {
  // Clear / sunny
  0: {
    text: "Clear sky",
    image: SunnyIcon
  },

  // Partly cloudy
  1: {
    text: "Mainly clear",
    image: PartlyCloudyIcon
  },

  2: {
    text: "Partly cloudy",
    image: PartlyCloudyIcon
  },

  // Overcast
  3: {
    text: "Overcast",
    image: OvercastIcon
  },

  // Fog
  45: {
    text: "Fog",
    image: FogIcon
  },

  48: {
    text: "Rime fog",
    image: FogIcon
  },

  // Drizzle
  51: {
    text: "Light drizzle",
    image: DrizzleIcon
  },

  53: {
    text: "Moderate drizzle",
    image: DrizzleIcon
  },

  55: {
    text: "Dense drizzle",
    image: DrizzleIcon
  },

  // Rain
  61: {
    text: "Slight rain",
    image: RainIcon
  },

  63: {
    text: "Moderate rain",
    image: RainIcon
  },

  65: {
    text: "Heavy rain",
    image: RainIcon
  },

  80: {
    text: "Rain showers",
    image: RainIcon
  },

  81: {
    text: "Moderate rain showers",
    image: RainIcon
  },

  82: {
    text: "Violent rain showers",
    image: RainIcon
  },

  // Snow
  71: {
    text: "Slight snow",
    image: SnowIcon
  },

  73: {
    text: "Moderate snow",
    image: SnowIcon
  },

  75: {
    text: "Heavy snow",
    image: SnowIcon
  },

  // Storm
  95: {
    text: "Thunderstorm",
    image: StormIcon
  },

  96: {
    text: "Thunderstorm with hail",
    image: StormIcon
  },

  99: {
    text: "Heavy thunderstorm with hail",
    image: StormIcon
  }
  }

  async function handleSearch() {
     const geoResponse = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
  )
  const geoData = await geoResponse.json()
  const latitude = geoData.results[0].latitude
  const longitude = geoData.results[0].longitude

   const weatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code,precipitation_sum&hourly=temperature_2m,weather_code&temperature_unit=${isImperial ? 'fahrenheit' : 'celsius'}&windspeed_unit=${isImperial ? 'mph' : 'kmh'}&precipitation_unit=${isImperial ? 'inch' : 'mm'}&timezone=auto`
  )
  
  const dataResponse = await weatherResponse.json()
  console.log(dataResponse)
  setWeatherData(dataResponse)
  
  }
  
  return (
    <Main>

      <Header>
        <img src={logo} alt="Weather App logo" />

        <DropdownContainer>
          <ButtonUnits onClick={() => setIsUnitsMenuOpen(!isUnitsMenuOpen)}>

            <span>
              <img src={IconUnits} alt="Units icon" />
              Units
            </span>
            <img src={IconDropdown} alt="Dropdown icon" />
          </ButtonUnits >
          {isUnitsMenuOpen && (
            <DropdownMenu >
              {!isImperial ? <Button $isActive={!isImperial} onClick={() => {
                setIsImperial(true)
                setTemperatureUnit('Fahrenheit')
                setWindSpeedUnit('mph')
                setPrecipitationUnit('in')
              }}>
                Switch to Imperial
              </Button> : <Button $isActive={isImperial} onClick={() => {
                setIsImperial(false)
                setTemperatureUnit('Celsius')
                setWindSpeedUnit('km/h')
                setPrecipitationUnit('mm')
              }}>
                Switch to Metric
              </Button>}
              <section>
                <h3>
                  Temperature
                </h3>
                <ul>
                  <li>
                    <Button $isActive={temperatureUnit === 'Celsius'} onClick={() => setTemperatureUnit('Celsius')

                    } >
                      Celsius (°C)
                    <span>
                      {temperatureUnit === 'Celsius' && <img src={IconCheckMark} alt="Checkmark icon" />}
                    </span>
                    </Button>
                  </li>
                  <li>
                    <Button $isActive={temperatureUnit === 'Fahrenheit'} onClick={() => setTemperatureUnit('Fahrenheit')}>
                      Fahrenheit (°F)
                      <span>
                        {temperatureUnit === 'Fahrenheit' && <img src={IconCheckMark} alt="Checkmark icon" />}
                      </span>
                    </Button>
                  </li>
                </ul>
                <hr style={{
                  border: 'none',
                  borderTop: '1px solid rgba(255,255,255,0.08)', marginTop:'0.5rem'}} />
                    
              </section>

              <section>
                <h3>
                  Wind Speed
                </h3>
                <ul>
                  <li>
                    <Button $isActive={windSpeedUnit === 'km/h'} onClick={() => setWindSpeedUnit('km/h')}>
                      km/h
                      {windSpeedUnit === 'km/h' && <img src={IconCheckMark} alt="Checkmark icon" />}
                    </Button>

                  </li>
                  <li>
                    <Button $isActive={windSpeedUnit === 'mph'} onClick={() => setWindSpeedUnit('mph')}>
                      mph
                      {windSpeedUnit === 'mph' && <img src={IconCheckMark} alt="Checkmark icon" />}
                    </Button>
                  </li>
                </ul>
                 <hr style={{
                  border: 'none',
                  borderTop: '1px solid rgba(255,255,255,0.08)', marginTop:'0.5rem'}} />
              </section>
              <section>
                <h3>
                  Precipitation
                </h3>
                <ul>
                  <li>
                    <Button $isActive={precipitationUnit === 'mm'} onClick={() => setPrecipitationUnit('mm')}>

                      Millimeters (mm)

                      {precipitationUnit === 'mm' && <img src={IconCheckMark} alt="Checkmark icon" />}

                    </Button></li>
                  <li>
                    <Button $isActive={precipitationUnit === 'in'} onClick={() => setPrecipitationUnit('in')}>
                      Inches (in)

                      {precipitationUnit === 'in' && <img src={IconCheckMark} alt="Checkmark icon" />}

                    </Button>
                  </li>
                </ul>
                
              </section>
            </DropdownMenu>
          )}
        </DropdownContainer>
      </Header>

      <h1>How's the sky looking today?</h1>
      <SearchContainer>
        <SearchInputWrapper htmlFor='search-input'>
          <img src={IconSearch} alt="Search icon" />
          <SearchInput id='search-input' type="text" placeholder="Search for a city, e.g., New York" value={city} onChange={(e) => setCity(e.target.value)} />
        </SearchInputWrapper>
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchContainer>
      <WeatherGrid>

      
        <TodayWeather>
          
        </TodayWeather>
        <WeatherInfoContainer>
          <WeatherInfoCard title='Feels like' value={weatherData?.current?.apparent_temperature } units={weatherData?.current_units?.apparent_temperature} />

          <WeatherInfoCard title='Humidity' value={weatherData?.current?.relative_humidity_2m} units={weatherData?.current_units?.relative_humidity_2m} />

          <WeatherInfoCard title='Wind' value={weatherData?.current?.wind_speed_10m} units={weatherData?.current_units?.wind_speed_10m} />

          <WeatherInfoCard title='Precipitation' value={weatherData?.current?.precipitation} units={weatherData?.current_units?.precipitation} />
        </WeatherInfoContainer>

          
        <DailyForecastContainer>

        
          {weatherData?.daily?.time.map( (day, index) => {
              const dayName = new Date(day).toLocaleDateString(
          "en-US",
          { weekday: "short" }
        )
              return(
            <DailyForecast  
            key={day} >
              
              <p>{dayName}</p>
              
              <img src={weatherCodes[weatherData.daily.weather_code[index]].image} alt="" />
                {/* <img src={SunnyIcon} alt="" /> */}
                <div className='daily-div-temperature'>
                  <p>
                    
                    {`${Math.round(weatherData.daily.temperature_2m_max[index])}°`}
                    {/* {weatherData.daily_units.temperature_2m_max} */}
                  </p>
                  <p>
                    
                    {`${Math.round(weatherData.daily.temperature_2m_min[index])}°`}
                    {/* {weatherData.daily_units.temperature_2m_min} */}
                  </p>
                </div>
             

            </DailyForecast>
          )})}
        </DailyForecastContainer>
        <HourlyForecastContainer>
          <div className='hourly-header'>
            <h2>Hourly forecast</h2>
            <ButtonUnits onClick={() => setIsDaysMenuOpen(!isDaysMenuOpen)}>

              <span>
                  
                {dayMenu}
              </span>
        
            </ButtonUnits >
          </div>
          
          {isDaysMenuOpen &&<DropdownDaysMenu >
            
             
                <ul>
                  <li>
                    <Button onClick={()=> setDayMenu('Monday')}>
                      Monday
                    </Button>
                  </li>
                  <li>
                   <Button onClick={()=> setDayMenu('Tuesday')}>
                      Tuesday
                    </Button>
                  </li>
                  <li>
                   <Button onClick={()=> setDayMenu('Wednesday')}>
                      Wednesday
                    </Button>
                  </li>
                  <li>
                    <Button onClick={()=> setDayMenu('Thursday')}>
                      Thursday
                    </Button>
                  </li>
                  <li>
                    <Button onClick={()=> setDayMenu('Friday')}>
                      Friday
                    </Button>
                  </li>
                  <li>
                   <Button onClick={()=> setDayMenu('Saturday')}>
                      Saturday
                    </Button>
                  </li>
                  <li>
                   <Button onClick={()=> setDayMenu('Sunday')}>
                      Sunday
                    </Button>
                  </li>
                </ul>
                
              
            </DropdownDaysMenu>}

          {weatherData?.hourly?.time.slice(0,7).map( (time, index) => {
              const hour = new Date(time).toLocaleTimeString(
          "en-US",
          { hour: "numeric",
        hour12: true}
        )
              return(
            <HourlyForecast
            key={time} >

             
              <img src={weatherCodes[weatherData.hourly.weather_code[index]].image} alt="" />
                {/* <img src={SunnyIcon} alt="" /> */}
                 <p>{hour}</p>
              <p>
                
                {weatherData.hourly.temperature_2m[index]}
                {/* {weatherData.daily_units.temperature_2m_max} */}
              </p>
             

            </HourlyForecast>
          )})}
        </HourlyForecastContainer>
      </WeatherGrid>

      
      {/* <!-- Insert hourly forecast for the selected day here --> */}
    </Main>
  )
}

export default App
