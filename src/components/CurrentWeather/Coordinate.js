import Card from 'react-bootstrap/Card';

// props contain longtitude, latitude
const Coordinate = (props) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Coordinate</Card.Title>
                    <Card.Text>Longtitude {props.longtitude}</Card.Text>
                    <Card.Text>Latitude {props.latitude}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Coordinate