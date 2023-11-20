const WeatherForecast = ({id, main, description, icon}) => {
    return (
        <div>
            <h5 className="text-center">Weather forecast</h5>
            <p>Id {id}</p>
            <p>Main {main}</p>
            <p>Description {description}</p>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={icon}/>
        </div >
    )
}

export default WeatherForecast