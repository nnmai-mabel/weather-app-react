import { useState, useEffect } from 'react';
import Weather from './Weather';
import Coordinate from './Coordinate';
import MainWeather from './MainWeather';
import Wind from './Wind';
import Clouds from './Clouds';
import Rain from './Rain';
import Snow from './Snow';
import Sys from './Sys';

const CurrentWeather = ({ }) => {

    // Set current weather
    const [data, setData] = useState({})
    const [coordinate, setCoordinate] = useState({})
    const [weather, setWeather] = useState([])
    const [base, setBase] = useState('')
    const [mainWeather, setMainWeather] = useState({})
    const [visbility, setVisibility] = useState('')
    const [wind, setWind] = useState({})
    const [clouds, setClouds] = useState({})
    const [rain, setRain] = useState({})
    const [snow, setSnow] = useState({})
    const [dataTime, setDataTime] = useState(0)
    const [sys, setSys] = useState({})
    const [timezone, setTimezone] = useState(0)
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [cod, setCod] = useState(0)

    // Set inital query for searching countries in the region
    const [cityNameQuery, setCityNameQuery] = useState('');

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNameQuery}&appid=3498afc9f7c40a107d258318ec8a5ee7&units=metric`)
            .then(response => response.json())
            .then(data => {
                console.log(data)

                // Update data fetched from API
                setData(data)
                setCoordinate(data.coord)
                setWeather(data.weather)
                setBase(data.base)
                setMainWeather(data.main)
                setVisibility(data.visibility)
                setWind(data.wind)
                setClouds(data.clouds)
                setRain(data.rain)
                setSnow(data.snow)
                setDataTime(data.dt)
                setSys(data.sys)
                setTimezone(data.timezone)
                setId(data.id)
                setName(data.name)
                setCod(data.cod)
            })
            .catch(err => {
                console.log(err);
            });
    }, [cityNameQuery]) // cityNameQuery is a reactive value and needs to change on a re-render -> put in dependency list

    //Create the searchQuery() function after the useEffect hook to capture the textbox text value then use it to update the query state
    function searchQuery(evt) {
        const value = document.querySelector('[name="searchText"]').value;
        setCityNameQuery(value);
    }

    // Convert time to another format
    function convertUnixTimestampToDateTime(timestamp) {
        const date = new Date(timestamp * 1000);
    
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
    
        const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        
        return formattedDateTime; // can use toISOString(), toLocaleString(), or other Date methods for formatting;
    }

    // Convert timezone to GMT
    function shiftFromUTCToGMT(timestamp) {

        // Since timezone is Shift in seconds from UTC
        // Divide the timezone by 3600 seconds (the seconds in 1h) will result in the GMT
        
        const gmtTime = timestamp / 3600
        return `GMT +${gmtTime}`;
    }

    return (
        <div>
            <h2 className="text-center">
                Current Weather
            </h2>
            <hr />
            <p>Temperature now</p>
            <div className="col-md-5 mb-2">
                <input type="text" name="searchText" className="form-control" placeholder="Search Cities" />
            </div>
            <div className="col-md-2 mb-2">

                {/*Attach a ReactJS event to the button called “searchQuery” using the ReactJS syntax onClick={searchQuery}*/}
                <button type="button" className="btn btn-primary" onClick={searchQuery}>Search</button>
            </div>

            {/* If data is successfully fetched through correct city name */}
            {cod === 200 ? (
                <div>
                    <h1>{name}</h1>
                    <img src={`https://openweathermap.org/images/flags/${sys.country.toLowerCase()}.png`} />
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
                    <h2>Visibility {visbility}</h2>

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
                    <h1>Data time: {convertUnixTimestampToDateTime(dataTime)}</h1>

                    {/* Sys */}
                    <Sys
                        type={sys.type}
                        id={sys.id}
                        message={sys.message}
                        country={sys.country}
                        sunrise={convertUnixTimestampToDateTime(sys.sunrise)}
                        sunset={convertUnixTimestampToDateTime(sys.sunset)}
                    />

                    {/* Timezone */}
                    <h2>Timezone {timezone}</h2>
                    
                    <h2>Timezone {shiftFromUTCToGMT(timezone)}</h2>
                </div>

            ) : (
                <p>{data.message}</p>
            )
            }

        </div >
    )
}

export default CurrentWeather