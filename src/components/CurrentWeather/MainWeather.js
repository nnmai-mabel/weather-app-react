// props contain temp, feelsLike, tempMin, tempMax, pressure, humidity, seaLevel, groundLevel
const MainWeather = (props) => {
    return (
        <div>
            <h2 className="text-center">Main Weather</h2>
            <p>Temperature {props.temp}</p>
            <p>Feels like {props.feelsLike}</p>
            <p>Temperature Min {props.tempMin}</p>
            <p>Temperature Max {props.tempMax}</p>
            <p>Pressure {props.pressure}</p>
            <p>Humidity {props.humidity}</p>
            <p>Sea Level {props.seaLevel}</p>
            <p>Ground Level {props.groundLevel}</p>
        </div >
    )
}

export default MainWeather
