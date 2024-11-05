'use client'

import ItemList from "./item-list"
import NewItem from "./new-item"
import itemsData from './items.json'
import { useState } from "react"
import MealIdeas from "./meal-ideas"

let Page = () => {
    const [items,setItems] = useState([...itemsData])
    const [ingredient, setIngredient] = useState('')

    let handleAddItem = (item) => {
        setItems((prevItems) => [...prevItems, item])
    }

    const removeEmojis = (str) => {
        return str.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '');
    };
    
    let handleSelectedItem = (name) => {
        setIngredient(removeEmojis(name))
    }

    return(
        <div className="m-4">
            <NewItem onAddItem={handleAddItem}/>   
            <h1 className="text-3xl font-bold">Shopping List</h1>
            <ItemList items={items} handleSelectedItem={handleSelectedItem}/>
            <MealIdeas ingredient={ingredient} />
        </div>
    )
}

export default Page