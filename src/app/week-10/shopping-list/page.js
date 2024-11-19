'use client'

import ItemList from "./item-list"
import NewItem from "./new-item"
import { useEffect, useState } from "react"
import MealIdeas from "./meal-ideas"
import { getItems, addItem } from "../_services/shopping-list-service"

let Page = () => {

    let loadItems = async(user, setItems) => {
        try{
            const items = await getItems(user.uid);
            setItems(items);
        }
        catch(error){
            console.log(error.message);
        }
    }

    useEffect(() => {
        loadItems(user, setItems);
    },[user]);

    const [items,setItems] = useState([...itemsData])
    const [ingredient, setIngredient] = useState('')

    let handleAddItem = async(item) => {
        try{
            const itemId = await addItemToUser(user.uid, item);
            if (itemId) {
              const itemWithId = { id: itemId, ...item };
              setItems(prevItems => [...prevItems, itemWithId]);
            }
        }catch(error) {
            console.log(error);
        }
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