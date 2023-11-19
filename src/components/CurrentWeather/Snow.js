// props contain snow1h, snow3h
const Snow = (props) => {
    return (
        <div>
            <h2 className="text-center">Snow</h2>
            <p>Snow 1h {props.snow1h}</p>
            <p>Snow 3h {props.snow3h}</p>
        </div >
    )
}

export default Snow