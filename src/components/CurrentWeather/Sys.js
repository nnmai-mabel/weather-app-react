// props contain type, id, message, country, sunrise, sunset
const Sys = (props) => {
    return (
        <div>
            <h2 className="text-center">Sys</h2>
            <p>Type {props.type}</p>
            <p>Id {props.id}</p>
            <p>Message {props.message}</p>
            <p>Country {props.country}</p>
            <p>Sunrise {props.sunrise}</p>
            <p>Sunset {props.sunset}</p>
        </div >
    )
}

export default Sys