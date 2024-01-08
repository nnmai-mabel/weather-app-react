import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ForecastListItem from "./ForecastListItem"
import CityForecast from './CityForecast';

import ConvertUnixTimestampToDateTime from '../ConvertTime/ConvertUnixTimestampToDateTime';
import ShiftFromUTCToGMT from '../ConvertTime/ShiftFromUTCToGMT';

const Forecast5days = ({ forecastData, forecastList, forecastCity }) => {
    console.log(forecastList)
    return (
        <>
            
            <h2 className="text-center mt-5">Forecast in 5 days every 3 hours</h2>
            <hr />
            {/* <p>{forecastData.cod}</p>
            <p>Message {forecastData.message}</p>
            <p>A number of timestamps returned in the API response {forecastData.cnt}</p>
            <h2>List</h2> */}
            {forecastData.cod === '200' ? (
                <div>
                    {/* <CityForecast
                        name={forecastCity.name}
                        coordinate={forecastCity.coord}
                        country={forecastCity.country}
                        population={forecastCity.population}
                        timezone={ShiftFromUTCToGMT(forecastCity.timezone)}
                        sunrise={ConvertUnixTimestampToDateTime(forecastCity.sunrise)}
                        sunset={ConvertUnixTimestampToDateTime(forecastCity.sunset)}
                    /> */}
                    
                    <Container>
                        <Row>
                            {forecastList.map((object, index) => (
                                <Col>
                                    <ForecastListItem
                                        key={index}
                                        index={index}
                                        dt={ConvertUnixTimestampToDateTime(object.dt)}
                                        main={object.main}
                                        weather={object.weather}
                                        clouds={object.clouds}
                                        wind={object.wind}
                                        visibility={object.visibility}
                                        pop={object.pop}
                                        rain={object.rain}
                                        snow={object.snow}
                                        sys={object.sys}
                                        dtTxt={object.dt_txt}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Container>

                </div>
            ) : ("forecast list not avai")
            }

        </>
    )
}

export default Forecast5days
