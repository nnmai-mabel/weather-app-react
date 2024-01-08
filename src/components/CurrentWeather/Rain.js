import Card from 'react-bootstrap/Card';

// props contain rain1h, rain3h
const Rain = (props) => {
    return (
        <>
            <div className="mt-4"> {/* Adding margin top and bottom */}

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Rain</Card.Title>
                        <Card.Text>Rain 1h {props.rain1h}mm</Card.Text>
                        <Card.Text>Rain 3h {props.rain3h}mm</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Rain