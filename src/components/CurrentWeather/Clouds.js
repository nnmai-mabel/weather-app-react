import Card from 'react-bootstrap/Card';

// props contain cloudiness
const Clouds = (props) => {
    return (
        <>
            <div className="mt-4"> {/* Adding margin top and bottom */}

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Clouds</Card.Title>
                        <Card.Text>Cloudiness {props.cloudiness}%</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Clouds