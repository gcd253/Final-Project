import React from 'react'

const ItemCard = ({ name, des, condition, category, id, selectCard, imageUrl }) => {

  return (
    <div onClick={() => selectCard(id)}>
      <div className="bg-gray-100 rounded overflow-hidden shadow-md cursor-pointer duration-500 hover:bg-gray-300 hover:scale-[1.03] relative dark:bg-slate-800">
        <img src={imageUrl} alt="an image of the item" ></img>
        <h2 className="text-gray-800 font-bold dark:text-white">{name}</h2>
        <h3 className="dark:text-slate-400 pb-1" >{des}</h3>
        <div className="bg-gray-100 z-10 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2 hover:scale-[1.03] duration-500 opacity-40 hover:opacity-90">
          <span>View Details</span>
        </div>
      </div>

    </div>
  )
}

export default ItemCard