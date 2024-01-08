import Card from 'react-bootstrap/Card';

// props contain speed, direction, gust
const Wind = (props) => {
    return (
        <>
            <div className="mt-4"> {/* Adding margin top and bottom */}

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Wind</Card.Title>
                        <Card.Text>Speed {props.speed}m/s</Card.Text>
                        <Card.Text>Direction {props.direction}</Card.Text>
                        <Card.Text>Gust {props.gust}m/s</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Wind