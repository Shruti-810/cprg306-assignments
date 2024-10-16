'use client'

import { useState } from "react"

let NewItem = () => {

    const[quantity, setQuantity] = useState(1);
    const[name,setName] = useState("")
    const[category,setCategory] = useState('Produce')
    let categoryValues = ['Produce', 'Dairy', 'Bakery', 'Meat', 'Frozen Foods', 'Canned Goods', 'Dry Goods', 'Beverages', 'Snacks', 'Household', 'Other']

    let handleSubmit = (event) => {
        event.preventDefault()
        let item = {
            'name': {name},
            'quantity': {quantity},
            'category': {category}
        }
        console.log(item.name.name)
        alert("Added Item: "+item.name.name+" Quantity: "+item.quantity.quantity+" Category: "+item.category.category)
        setCategory('Produce')
        setName('')
        setQuantity(1)
    }

    let increment = (event) => {
        event.preventDefault()
        if(quantity<20){
            setQuantity(quantity+1)
        }
    }

    let decrement = (event) => {
        event.preventDefault()
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }

    return (
      <div className="max-w-md mx-auto rounded-lg p-6">
        <form>
          {/* Name */}
          <div className="mb-4">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={name}
              placeholder="Enter Item"
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          {/* Quantity */}
          <div className="bg-gray-300 p-2 w-full text-center grid grid-cols-4 gap-1 rounded mb-5">
            <div className="col-span-2 font-bold text-lg">{quantity}</div>
            <button
              className={
                quantity > 1
                  ? "col-span-1 bg-blue-200 rounded"
                  : "col-span-1 bg-slate-50 rounded"
              }
              onClick={decrement}
              type="button"
            >
              -
            </button>
            <button
              className={
                quantity < 20
                  ? "col-span-1 bg-blue-200 rounded"
                  : "col-span-1 bg-slate-50 rounded"
              }
              onClick={increment}
              type="button"
            >
              +
            </button>
          </div>

          {/* Category */}
          <div className="mb-4">
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option disabled>Category</option>
              {categoryValues.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Submit */}
          <div>
            <input
              type="button"
              value="Add Item"
              onClick={handleSubmit}
              className="w-full bg-blue-500 text-white p-2 rounded"
            />
          </div>
        </form>
      </div>
    );
}

export default NewItem