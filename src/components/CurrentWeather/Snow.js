import Card from 'react-bootstrap/Card';

// props contain snow1h, snow3h
const Snow = (props) => {
    return (
        <>
            <div className="mt-4"> {/* Adding margin top and bottom */}

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Snow</Card.Title>
                        <Card.Text>Snow 1h {props.snow1h}</Card.Text>
                        <Card.Text>Snow 3h {props.snow3h}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Snow