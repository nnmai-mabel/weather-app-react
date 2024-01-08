import Card from 'react-bootstrap/Card';

// props contain temp, feelsLike, tempMin, tempMax, pressure, humidity, seaLevel, groundLevel
const MainWeather = (props) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Main Weather</Card.Title>
                    {/* <Card.Text>Temperature {props.temp}</Card.Text> */}
                    {/* <Card.Text>Temperature Min {props.tempMin}</Card.Text>
                    <Card.Text>Temperature Max {props.tempMax}</Card.Text> */}
                    
                    <Card.Text>Sea Level {props.seaLevel}</Card.Text>
                    <Card.Text>Ground Level {props.groundLevel}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default MainWeather
