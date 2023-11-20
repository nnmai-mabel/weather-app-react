import CoordinateCityForecast from "./CoordinateCityForecast"

const CityForecast = ({ name, coordinate, country, population, timezone, sunrise, sunset }) => {
    return (
        <div>
            <h5 className="text-center">City forecast</h5>
            <p>Name: {name}</p>
            <CoordinateCityForecast
                longtitude={coordinate.lon}
                latitude={coordinate.lat}
            />
            <p>Country {country}</p>
            <p>Population {population}</p>
            <p>Timezone {timezone}</p>
            <p>Sunrise {sunrise}</p>
            <p>Sunset {sunset}</p>
        </div >
    )
}

export default CityForecast