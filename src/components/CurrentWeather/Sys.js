import Card from 'react-bootstrap/Card';

// props contain type, id, message, country, sunrise, sunset
const Sys = (props) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Sys</Card.Title>
                    <Card.Text>Type {props.type}</Card.Text>
                    <Card.Text>Message {props.message}</Card.Text>
                    <Card.Text>Country {props.country}</Card.Text>
                    <Card.Text>Sunrise {props.sunrise}</Card.Text>
                    <Card.Text>Sunset {props.sunset}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Sys