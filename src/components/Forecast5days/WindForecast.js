const WindForecast = ({speed, direction, gust}) => {
    return (
        <div>
            <h5 className="text-center">Wind forecast</h5>
            <p>Speed {speed}</p>
            <p>Direction {direction}</p>
            <p>Gust {gust}</p>
        </div >
    )
}

export default WindForecast