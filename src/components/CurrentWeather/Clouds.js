// props contain cloudiness
const Clouds = (props) => {
    return (
        <div>
            <h2 className="text-center">Clouds</h2>
            <p>Cloudiness {props.cloudiness}</p>
        </div >
    )
}

export default Clouds