import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Weather = (props) => {
    return (
        <>
    <div className="mt-4 mb-4 d-flex justify-content-center"> {/* Adding margin top and bottom and centering */}
    <Card style={{ width: '100%', maxWidth: '500px' }}> {/* Adjusted maxWidth */}

                <Card.Body>
                    <Row>
                        {/* Column for image */}
                        <Col xs={5} lg={5}>
                            <Card.Img
                                variant="left"
                                src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
                                alt={`${props.icon}`}
                                style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'contain' }}
                            />
                            <Card.Text>
                                {props.name}{' '}
                                <img src={`https://openweathermap.org/images/flags/${props.sysCountry.toLowerCase()}.png`} alt={`${props.sysCountry}`} />
                            </Card.Text>
                            <Card.Title>{Math.round(props.temp)}°</Card.Title>

                        </Col>

                        {/* Column for text content */}
                        <Col xs={7} lg={7}>
                            <Card.Text className="text-muted">{props.description.toLowerCase()}</Card.Text>
                            <Card.Text className="text-muted">
                                H: {Math.round(props.tempMax)}° L: {Math.round(props.tempMin)}°
                            </Card.Text>
                            <Card.Text className="text-muted">
                                Feels like {Math.round(props.feelsLike)}° Pressure {props.pressure}hPA
                            </Card.Text>
                            <Card.Text className="text-muted">
                                Humidity {props.humidity}% Visibility {props.visibility / 1000}km
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            </div>
        </>
    );
};

export default Weather;
