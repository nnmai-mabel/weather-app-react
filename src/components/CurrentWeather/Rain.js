// props contain rain1h, rain3h
const Rain = (props) => {
    return (
        <div>
            <h2 className="text-center">Rain</h2>
            <p>Rain 1h {props.rain1h}</p>
            <p>Rain 3h {props.rain3h}</p>
        </div >
    )
}

export default Rain