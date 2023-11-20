import Weather from './Weather';
import Coordinate from './Coordinate';
import MainWeather from './MainWeather';
import Wind from './Wind';
import Clouds from './Clouds';
import Rain from './Rain';
import Snow from './Snow';
import Sys from './Sys';
import ConvertUnixTimestampToDateTime from '../ConvertTime/ConvertUnixTimestampToDateTime';
import ShiftFromUTCToGMT from '../ConvertTime/ShiftFromUTCToGMT';

const CurrentWeather = ({ data, coordinate, weather, base, mainWeather, visibility, wind, clouds, rain, snow, dataTime, sys, timezone, id, name }) => {

    return (
        <div>
            <h2 className="text-center">
                Current Weather
            </h2>
            <hr />
            <p>{data.cod}</p>
            {/* If data is successfully fetched through correct city name */}
            {data.cod === 200 ? (
                <div>
                    <h1>{name}</h1>
                    <img src={`https://openweathermap.org/images/flags/${sys.country.toLowerCase()}.png`} alt={`${sys.country}`} />
                    {/* Coordinate of the city */}
                    <Coordinate
                        longtitude={coordinate.lon}
                        latitude={coordinate.lat}
                    />

                    {/* Map through each object to get weather data */}
                    {weather.map((obj, index) => (
                        <Weather
                            key={index}
                            id={obj.id}
                            main={obj.main}
                            description={obj.description}
                            icon={obj.icon}
                        />
                    )
                    )}

                    {/* Base information */}
                    <h2>Base {base}</h2>

                    {/* Main weather data */}
                    <MainWeather
                        temp={mainWeather.temp}
                        feelsLike={mainWeather.feels_like}
                        tempMin={mainWeather.temp_min}
                        tempMax={mainWeather.temp_max}
                        pressure={mainWeather.pressure}
                        humidity={mainWeather.humidity}
                        seaLevel={mainWeather.sea_level}
                        groundLevel={mainWeather.grnd_level}
                    />

                    {/* Visibility */}
                    <h2>Visibility {visibility}</h2>

                    {/* Wind */}
                    <Wind
                        speed={wind.speed}
                        direction={wind.deg}
                        gust={wind.gust}
                    />

                    {/* Clouds */}
                    <Clouds
                        cloudiness={clouds.all}
                    />

                    {/* Rain */}
                    {rain ? (
                        <Rain
                            rain1h={rain['1h']} // Accessing property '1h' using bracket notation because in Javascript cannot start with number so cannot use rain.1h
                            rain3h={rain['3h']} // Accessing property '3h' using bracket notation
                        />
                    ) : (<h1>Rain not available</h1>)}


                    {/* Snow */}
                    {snow ? (
                        <Snow
                            snow1h={snow['1h']} // Accessing property '1h' using bracket notation because in Javascript cannot start with number so cannot use rain.1h
                            snow3h={snow['3h']} // Accessing property '3h' using bracket notation
                        />
                    ) : (<h1>Snow is not available</h1>)}

                    {/* Time of data calculation, unix, UTC */}
                    <h1>Data time: {ConvertUnixTimestampToDateTime(dataTime)}</h1>

                    {/* Sys */}
                    <Sys
                        type={sys.type}
                        id={sys.id}
                        message={sys.message}
                        country={sys.country}
                        sunrise={ConvertUnixTimestampToDateTime(sys.sunrise)}
                        sunset={ConvertUnixTimestampToDateTime(sys.sunset)}
                    />

                    {/* Timezone */}
                    <h2>Timezone {timezone}</h2>

                    <h2>Timezone {ShiftFromUTCToGMT(timezone)}</h2>
                </div>

            ) : (
                <p>{data.message}</p>
            )
            }

        </div >
    )
}

export default CurrentWeather