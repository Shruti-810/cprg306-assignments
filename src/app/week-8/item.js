let Item = ({name, quantity, category, handleItem}) => {


 
    console.log(handleItem(name))
    
    return(
        <>
            <ul className="m-4 bg-slate-100 px-4 py-2 w-1/4" onClick={handleItem(name)}>
                <li className="font-bold">{name}</li>
                <li>Buy {quantity} in {category}</li>
            </ul>
        </>
    )
}

export default Item