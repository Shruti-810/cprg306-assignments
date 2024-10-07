'use client'

import { useState } from "react"

let NewItem = () => {

    const[quantity, setQuantity] = useState(1);

    let increment = () => {
        if(quantity<20){
            setQuantity(quantity+1)
        }
    }

    let decrement = () => {
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }

    return(
        <div>
        <div className="bg-gray-300 p-2 w-20 m-5 text-center grid grid-cols-4 gap-1 rounded">
        <div className="col-span-2">{quantity}</div>
        <button className={quantity>1 ? "col-span-1 bg-blue-200 rounded" : "col-span-1 bg-slate-50 rounded"} onClick={decrement}>-</button>
        <button className={quantity<20 ? "col-span-1 bg-blue-200 rounded" : "col-span-1 bg-slate-50 rounded"} onClick={increment}>+</button>
        </div>
        </div>
    )
}

export default NewItem