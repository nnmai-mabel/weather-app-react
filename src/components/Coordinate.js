// props contain longtitude, latitude
const Coordinate = (props) => {
    return (
        <div>
            <h2 className="text-center">
                Coordinate
            </h2>
            <p>Longtitude {props.longtitude}</p>
            <p>Latitude {props.latitude}</p>
        </div >
    )
}

export default Coordinate