import { DailyForecast } from "./style.js";



function DailyForecastCard({weatherData}){
   
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
          )
} 

export default DailyForecastCard