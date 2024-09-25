let Item = ({name, quantity, category}) => {
    return(
        <>
            <ul className="m-4 bg-slate-100 px-4 py-2 w-1/4">
                <li className="font-bold">{name}</li>
                <li>Buy {quantity} in {category}</li>
            </ul>
        </>
    )
}

export default Item