import { useState, useEffect } from 'react';
import CurrentWeather from "./CurrentWeather/CurrentWeather"
import Forecast5days from './Forecast5days/Forecast5days';
import ApiKey from './ApiKey'

const Weather = () => {

    // Set current weather
    const [data, setData] = useState({})
    const [coordinate, setCoordinate] = useState({})
    const [weather, setWeather] = useState([])
    const [base, setBase] = useState('')
    const [mainWeather, setMainWeather] = useState({})
    const [visibility, setVisibility] = useState('')
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

    // Call the ApiKey function to get the API key string
    const apiKey = ApiKey();

    // Fetch current weather data
    useEffect(() => {
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNameQuery}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                // console.log(data)

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

    // Fetch forecast in 5 days data
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityNameQuery}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                console.log("Forecast")
                console.log(data)

                // Update data fetched from API
                
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

    return (
        <div>
            <h2 className="text-center">Weather</h2>
            <p>{`https://api.openweathermap.org/data/2.5/forecast?q=${cityNameQuery}&appid=${<ApiKey />}&units=metric`}</p>
            <div className="col-md-5 mb-2">
                <input type="text" name="searchText" className="form-control" placeholder="Search Cities" />
            </div>
            <div className="col-md-2 mb-2">

                {/*Attach a ReactJS event to the button called “searchQuery” using the ReactJS syntax onClick={searchQuery}*/}
                <button type="button" className="btn btn-primary" onClick={searchQuery}>Search</button>
            </div>

            <CurrentWeather
                data={data}
                coordinate={coordinate}
                weather={weather}
                base={base}
                mainWeather={mainWeather}
                visibility={visibility}
                wind={wind}
                clouds={clouds}
                rain={rain}
                snow={snow}
                dataTime={dataTime}
                sys={sys}
                timezone={timezone}
                id={id}
                name={name}
                cod={cod}
            />

            <Forecast5days />
        </div >
    )
}

export default Weather