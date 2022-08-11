import React from 'react'

const ItemCard = ({ name, des, condition, category, id, selectCard, imageUrl }) => {

  return (
    <div  onClick={() => selectCard(id)}>
      <div className="bg-gray-100 rounded overflow-hidden shadow-md cursor-pointer duration-500 hover:bg-gray-300 hover:scale-[1.03] relative">
        <img src={imageUrl} alt="an image of the item" ></img>
        <h2 className="text-gray-800 font-bold">{name}</h2>
        <h3>{des}</h3>
        <p>Category: {category}</p>
        <p>Condition: {condition}</p>
        <div className="bg-gray-100 z-10 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2 hover:scale-[1.03] duration-500">
          <span>View Details</span>
        </div>
      </div>

    </div>
  )
}

export default ItemCard