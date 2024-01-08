import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

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

            <h2 className="text-center mt-5">
                Current Weather
            </h2>
            <hr />
            {/* <p>{data.cod}</p> */}
            {/* If data is successfully fetched through correct city name */}
            {data.cod === 200 ? (
                <div>
                    {/* <h1>{name}</h1>
                    <img src={`https://openweathermap.org/images/flags/${sys.country.toLowerCase()}.png`} alt={`${sys.country}`} /> */}

                    <Container>
                        <Row className="justify-content-center">
                            {/* Map through each object to get weather data */}
                            {weather.map((obj, index) => (
                                <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                                    <Weather
                                        key={index}
                                        id={obj.id}
                                        main={obj.main}
                                        description={obj.description}
                                        icon={obj.icon}
                                        temp={mainWeather.temp}
                                        tempMin={mainWeather.temp_min}
                                        tempMax={mainWeather.temp_max}
                                        name={name}
                                        sysCountry={sys.country.toLowerCase()}
                                        feelsLike={mainWeather.feels_like}
                                        pressure={mainWeather.pressure}
                                        humidity={mainWeather.humidity}
                                        visibility={visibility}
                                    />
                                </Col>
                            )
                            )}
                        </Row>
                        <Row>
                            {/* <Col> */}
                            {/* Main weather data */}
                            {/* <MainWeather
                                    
                                    
                                    
                                    
                                    seaLevel={mainWeather.sea_level}
                                    groundLevel={mainWeather.grnd_level}
                                /> */}
                            {/* </Col> */}


                            {/* <Col> */}
                            {/* Base information */}
                            {/* Visibility */}
                            {/* <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>Base</Card.Title>
                                        <Card.Text>{base}</Card.Text>
                                    </Card.Body>
                                </Card> */}
                            {/* </Col> */}

                            <Col>
                                {/* Wind */}
                                <Wind
                                    speed={wind.speed}
                                    direction={wind.deg}
                                    gust={wind.gust}
                                />
                            </Col>
                            <Col>
                                {/* Clouds */}
                                <Clouds
                                    cloudiness={clouds.all}
                                />
                            </Col>

                            {/* Rain */}
                            {rain ? (
                                <Col>
                                    <Rain
                                        rain1h={rain['1h']} // Accessing property '1h' using bracket notation because in Javascript cannot start with number so cannot use rain.1h
                                        rain3h={rain['3h']} // Accessing property '3h' using bracket notation
                                    />
                                </Col>
                            ) : (
                                ""
                            )}


                            {/* Snow */}
                            {snow ? (
                                <Col>
                                    <Snow
                                        snow1h={snow['1h']} // Accessing property '1h' using bracket notation because in Javascript cannot start with number so cannot use rain.1h
                                        snow3h={snow['3h']} // Accessing property '3h' using bracket notation
                                    />
                                </Col>
                            ) : (
                                ""
                            )}

                            <Col>
                                {/* Sys sunset sunrise*/}
                                <Sys
                                    type={sys.type}
                                    id={sys.id}
                                    message={sys.message}
                                    country={sys.country}
                                    sunrise={ConvertUnixTimestampToDateTime(sys.sunrise)}
                                    sunset={ConvertUnixTimestampToDateTime(sys.sunset)}
                                />
                            </Col>
                            <Col>
                                {/* Coordinate of the city */}
                                <Coordinate
                                    longtitude={coordinate.lon}
                                    latitude={coordinate.lat}
                                />
                            </Col>
                            <Col>
                                <div className="mt-4"> {/* Adding margin top and bottom */}

                                    {/* Time of data calculation, unix, UTC */}
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title>Data time</Card.Title>
                                            <Card.Text>{ConvertUnixTimestampToDateTime(dataTime)}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>

                            <Col>
                                {/* Timezone */}
                                <div className="mt-4"> {/* Adding margin top and bottom */}

                                    <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title>Timezone</Card.Title>
                                            <Card.Text>{ShiftFromUTCToGMT(timezone)}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>

            ) : (
                <p>{data.message}</p>
            )
            }

        </div >
    )
}

export default CurrentWeather