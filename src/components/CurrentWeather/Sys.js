import Card from 'react-bootstrap/Card';

// props contain type, id, message, country, sunrise, sunset
const Sys = (props) => {
    return (
        <>
            <div className="mt-4"> {/* Adding margin top and bottom */}

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Sunset/Sunrise</Card.Title>
                        {/* <Card.Text>Type {props.type}</Card.Text>
                    <Card.Text>Message {props.message}</Card.Text>
                    <Card.Text>Country {props.country}</Card.Text> */}
                        <Card.Text>Sunrise {props.sunrise}</Card.Text>
                        <Card.Text>Sunset {props.sunset}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Sys