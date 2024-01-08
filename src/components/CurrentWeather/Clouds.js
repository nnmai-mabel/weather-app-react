import Card from 'react-bootstrap/Card';

// props contain cloudiness
const Clouds = (props) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Clouds</Card.Title>
                    <Card.Text>Cloudiness {props.cloudiness}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Clouds