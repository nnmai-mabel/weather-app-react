import Card from 'react-bootstrap/Card';

import MainWeatherForecast from "./MainWeatherForecast"
import WeatherForecast from "./WeatherForecast"
import CloudsForecast from './CloudsForecast';
import WindForecast from './WindForecast'
import SysForecast from './SysForecast';
import RainForecast from './RainForecast';
import SnowForecast from './SnowForecast';

const ForecastListItem = ({ index, dt, main, weather, clouds, wind, visibility, pop, rain, snow, sys, dtTxt }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Forecast Item {index}</Card.Title>
                    <Card.Text>
                        Time of data forecasted {dt}

                        {/* Main weather forecast */}
                        <MainWeatherForecast
                            temp={main.temp}
                            feelsLike={main.feels_like}
                            tempMin={main.temp_min}
                            tempMax={main.temp_max}
                            pressure={main.pressure}
                            seaLevel={main.sea_level}
                            groundLevel={main.grnd_level}
                            humidity={main.humidity}
                            tempKf={main.temp_kf}
                        />

                        {/* Weather forecast */}
                        {weather.map((object, index) => (
                            <WeatherForecast
                                key={index}
                                id={object.id}
                                main={object.main}
                                description={object.description}
                                icon={object.icon}
                            />
                        ))}

                        {/* Clouds */}
                        <CloudsForecast
                            all={clouds.all}
                        />

                        {/* Wind */}
                        <WindForecast
                            speed={wind.speed}
                            direction={wind.deg}
                            gust={wind.gust}
                        />

                        <h5>Visibility {visibility}</h5>
                        <h5>Probability of Precipitation {pop}</h5>

                        {/* Rain */}
                        {rain ? (
                        <RainForecast
                            rain3h={rain['3h']}
                        />
                        ) : ("Rain not available")
                        }

                        {/* Snow */}
                        {snow ? (
                        <SnowForecast
                            snow3h={snow['3h']}
                        />
                        ) : ("Snow not available")
                        }

                        {/* Part of the day */}
                        <SysForecast
                            pod={sys.pod}
                        />

                        <h5>Time of data forecasted dtTxt {dtTxt}</h5>

                    </Card.Text>
                </Card.Body>
            </Card>
        </div >
    )
}

export default ForecastListItem