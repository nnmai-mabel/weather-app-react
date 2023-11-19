// props contain id, main, description, icon
const Weather = (props) => {
    return (
        <div>
            <h2 className="text-center">Weather</h2>
            <p>Main {props.main}</p>
            <p>Description {props.description}</p>
            <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt={`${props.icon}`}/>
        </div >
    )
}

export default Weather
