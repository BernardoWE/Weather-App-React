import {Card}  from "./style.js"



function WeatherInfoCard({title, value, units}){
    return(
        <Card>
            <p>{title}</p>
            <p><strong>{value} {units}</strong></p>
        </Card>
    )
}
export default WeatherInfoCard