import { useState } from 'react'

import './App.css'
import IconUnits from './assets/images/icon-units.svg'
import IconDropdown from './assets/images/icon-dropdown.svg'
import IconCheckMark from './assets/images/icon-checkmark.svg'

function App() {
  const [isImperial, setIsImperial] = useState(false)
  const [isUnitsMenuOpen, setIsUnitsMenuOpen] = useState(false)
  const [temperatureUnit, setTemperatureUnit] = useState('')
  const [windSpeedUnit, setWindSpeedUnit] = useState('')
  const [precipitationUnit, setPrecipitationUnit] = useState('')

  return (
    <>  
  
      
      <button onClick={() => setIsUnitsMenuOpen(!isUnitsMenuOpen)}>

        <span>
          <img src={IconUnits} alt="Units icon" />
          Units
        </span>
        <img src={IconDropdown} alt="Dropdown icon" />
      </button >
      { isUnitsMenuOpen && (
        <div >
         {!isImperial ? <button onClick={() => {
            setIsImperial(true)
            setTemperatureUnit('Fahrenheit')
            setWindSpeedUnit('mph')
            setPrecipitationUnit('in')
          }}>
            Switch to Imperial
          </button> : <button onClick={() => {
            setIsImperial(false)
            setTemperatureUnit('Celsius')
            setWindSpeedUnit('km/h')
            setPrecipitationUnit('mm')
          }}>
            Switch to Metric
          </button> }
          <section>
            <h3>
              Temperature
            </h3>
            <ul>
              <li> 
                <button onClick={() => setTemperatureUnit('Celsius')
                  
                } >
                  Celsius (°C) 
                  <span>
                    {temperatureUnit === 'Celsius' && <img src={IconCheckMark} alt="Checkmark icon" />}
                  </span>
                </button>
                </li>
              <li>
                <button onClick={() => setTemperatureUnit('Fahrenheit')}>
                  Fahrenheit (°F)
                  <span>
                    {temperatureUnit === 'Fahrenheit' && <img src={IconCheckMark} alt="Checkmark icon" />}
                  </span>
                </button>
                </li>
            </ul>
            
          </section>

          <section>
            <h3>
              Wind Speed
            </h3>
            <ul>
              <li>
                <button onClick={() => setWindSpeedUnit('km/h')}>
                  km/h
                  {windSpeedUnit === 'km/h' && <img src={IconCheckMark} alt="Checkmark icon" />}
                </button>
                
                </li>
              <li>
                <button onClick={() => setWindSpeedUnit('mph')}>
                 mph
                 {windSpeedUnit === 'mph' && <img src={IconCheckMark} alt="Checkmark icon" />}
                </button>
              </li>
            </ul>
          </section>
          <section>
            <h3>
              Precipitation
            </h3>
            <ul>
              <li>
                <button onClick={() => setPrecipitationUnit('mm')}>

                  Millimeters (mm)

                 {precipitationUnit === 'mm' && <img src={IconCheckMark} alt="Checkmark icon" />}

                </button></li>
              <li>
                <button onClick={() => setPrecipitationUnit('in')}>
                  Inches (in)

                  {precipitationUnit === 'in' && <img src={IconCheckMark} alt="Checkmark icon" />}

                </button>
              </li>
            </ul>
            <p>
              </p>
            <p>
              
            </p>
          </section>
      </div>)}
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
    </>
  )
}

export default App
