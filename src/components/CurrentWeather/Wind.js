// props contain speed, direction, gust
const Wind = (props) => {
    return (
        <div>
            <h2 className="text-center">Wind</h2>
            <p>Speed {props.speed}</p>
            <p>Direction {props.direction}</p>
            <p>Gust {props.gust}</p>
        </div >
    )
}

export default Wind