import {Card}  from "./style.js"



function WeatherInfoCard({title, value}){
    return(
        <Card>
            <p>{title}</p>
            <p><strong>{value}</strong></p>
        </Card>
    )
}
export default WeatherInfoCard