import Card from 'react-bootstrap/Card';

// props contain rain1h, rain3h
const Rain = (props) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Rain</Card.Title>
                    <Card.Text>Rain 1h {props.rain1h}</Card.Text>
                    <Card.Text>Rain 3h {props.rain3h}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Rain