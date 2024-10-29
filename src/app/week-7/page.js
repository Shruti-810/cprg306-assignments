'use client'

import ItemList from "./item-list"
import NewItem from "./new-item"
import itemsData from './items.json'
import { useState } from "react"

let Page = () => {
    const [items,setItems] = useState([...itemsData])

    let handleAddItem = (item) => {
        setItems((prevItems) => [...prevItems, item])
    }

    return(
        <div className="m-4">
            <NewItem onAddItem={handleAddItem}/>   
            <h1 className="text-3xl font-bold">Shopping List</h1>
            <ItemList items={items}/>
        </div>
    )
}

export default Page