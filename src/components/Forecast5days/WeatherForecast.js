const WeatherForecast = ({id, main, description, icon}) => {
    return (
        <>
            {/* <h5 className="text-center">Weather forecast</h5> */}
            {/* <p>Id {id}</p>
            <p>Main {main}</p> */}
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={icon} style={{
    display: 'block', // Ensure it's a block-level element
    margin: 'auto', // Center horizontally
  }}/>

            <p className="text-center">{description}</p>
        </>
    )
}

export default WeatherForecast