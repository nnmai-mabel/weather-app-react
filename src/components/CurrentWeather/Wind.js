import Card from 'react-bootstrap/Card';

// props contain speed, direction, gust
const Wind = (props) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Wind</Card.Title>
                    <Card.Text>Speed {props.speed}</Card.Text>
                    <Card.Text>Direction {props.direction}</Card.Text>
                    <Card.Text>Gust {props.gust}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Wind