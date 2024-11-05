'use client'

import { useEffect, useState } from "react"

let fetchMealIdeas = async(ingredient) => {
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals
    }
    catch(error){
        console.log(error)
        return []
    }
}


export default function MealIdeas(props){


    const [meals,setMeals] = useState([]);

    let loadMealIdeas = async () => {
       try{
        let temp = await fetchMealIdeas(props.ingredient)
        setMeals([...meals, ...temp])
       }
       catch(error){
        console.log(error)
       }
    }

    useEffect(() => {
        loadMealIdeas();
    },[props.ingredient])

    return(
        <>
        <h1>Meal Ideas</h1>
        <p>Here are some meal ideas using {props.ingredient}:</p>
        <ul>
        {
            meals.map((meal,index) => {
                return(
                    <li key={index}>{meal.strMeal}</li>
                )
            })
        }
        </ul>
        </>
    )
}