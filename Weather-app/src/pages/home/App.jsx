import { useState } from 'react'

import './style.js'
import { Main, Header, DropdownContainer, DropdownMenu, Button, ButtonUnits } from './style.js'

import IconUnits from '../../assets/images/icon-units.svg'
import IconDropdown from '../../assets/images/icon-dropdown.svg'
import IconCheckMark from '../../assets/images/icon-checkmark.svg'
import logo from '../../assets/images/logo.svg'

function App() {
  const [isImperial, setIsImperial] = useState(false)
  const [isUnitsMenuOpen, setIsUnitsMenuOpen] = useState(false)
  const [temperatureUnit, setTemperatureUnit] = useState('Celsius')
  const [windSpeedUnit, setWindSpeedUnit] = useState('km/h')
  const [precipitationUnit, setPrecipitationUnit] = useState('mm')

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

      Search for a city, e.g., New York
      Search

      Feels like
      {/* <!-- Insert temperature here --> */}

      Humidity
      {/* <!-- Insert humidity here --> */}

      Wind
      {/* <!-- Insert wind here -->    */}

      Precipitation
      {/* <!-- Insert precipitation here --> */}

      Daily forecast
      {/* <!-- Insert daily forecast for the next 7 days here --> */}

      Hourly forecast
      {/* <!-- Insert hourly forecast for the selected day here --> */}
    </Main>
  )
}

export default App
