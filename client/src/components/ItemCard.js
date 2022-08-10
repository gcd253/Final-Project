import React from 'react'

const ItemCard = ({ name, des, condition, category, poster, id, selectCard }) => {
  return (
    <div  onClick={() => selectCard(id)}>
      <div className="bg-gray-100 rounded overflow-hidden shadow-md cursor-pointer duration-500 hover:bg-gray-300">
        <h2 className="text-gray-800 font-bold">{name}</h2>
        <h3>{des}</h3>
        <p>Category: {category}</p>
        <p>Condition: {condition}</p>
        <p>Posted by: {poster}</p>
      </div>
    </div>
  )
}

export default ItemCard