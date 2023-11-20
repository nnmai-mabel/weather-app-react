const MainWeatherForecast = ({temp, feelsLike, tempMin, tempMax, pressure, seaLevel, groundLevel, humidity, tempKf}) => {
    return (
        <div>
            <h5 className="text-center">Main weather forecast</h5>
            <p>Temp {temp}</p>
            <p>Feels like {feelsLike}</p>
            <p>Temp Min {tempMin}</p>
            <p>Temp Max {tempMax}</p>
            <p>Pressure {pressure}</p>
            <p>Sea level {seaLevel}</p>
            <p>Ground level {groundLevel}</p>
            <p>Humidity {humidity}</p>
            <p>Temp kf {tempKf}</p>
            
        </div >
    )
}

export default MainWeatherForecast