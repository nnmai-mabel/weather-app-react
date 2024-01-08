import Card from 'react-bootstrap/Card';

// props contain id, main, description, icon, temp, tempMin, tempMax, name, sys
const Weather = (props) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt={`${props.icon}`}/>
                <Card.Body>
                    {/* Weather */}
                    <Card.Text>{props.name} <img src={`https://openweathermap.org/images/flags/${props.sysCountry.toLowerCase()}.png`} alt={`${props.sysCountry}`} /></Card.Text>
                    <Card.Title>{Math.round(props.temp)}°</Card.Title>
                    {/* <Card.Text>Main {props.main}</Card.Text> */}
                    <Card.Text></Card.Text>
                    <Card.Text>{props.description.toLowerCase()}</Card.Text>
                    <Card.Text>H: {Math.round(props.tempMax)}° L: {Math.round(props.tempMin)}°</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Weather
