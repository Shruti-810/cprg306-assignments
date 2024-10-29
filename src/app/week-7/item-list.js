'use client'

import Item from "./item.js"
import { useState } from "react"
import Items from './items.json'

let ItemList = (props) => {
 
    const [sortBy, setSortBy] = useState('name')
    const [sortedArray, setSortedArray] = useState([...props.items])

    let sortByName = () => {
        console.log("Called")
        setSortBy('name')
        let sortedItems = [...props.items].sort((a, b) => a.name.localeCompare(b.name));
        setSortedArray([...sortedItems])
    }

    let sortByCategory = () => {
        setSortBy('category')
        let sortedItems = [...props.items].sort((a, b) => a.category.localeCompare(b.category));
        setSortedArray([...sortedItems])
    }

    return(
        <div>
        <div className="flex space-x-4 m-4">
        <label className="block text-lg font-semibold mb-2">Sort By: </label>
        <button className={`px-4 py-2 text-white rounded ${sortBy === 'name' ? 'bg-gray-500' : 'bg-gray-400'}`} onClick={sortByName}>Name</button>
        <button className={`px-4 py-2 text-white rounded ${sortBy === 'category' ? 'bg-gray-500' : 'bg-gray-400'}`} onClick={sortByCategory}>Category</button>
        </div>
        
        {
        props.items.map((item) => {
            return(
                <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category}/>
            )
        })
        }
      
        </div>
    );
}

export default ItemList