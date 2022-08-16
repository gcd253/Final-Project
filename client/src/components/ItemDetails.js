import React from 'react'

const ItemDetails = ({ selectedCard }) => {
  console.log(selectedCard)
  return (
    <div>
      <div>
        <div className="bg-gray-100 rounded overflow-hidden shadow-md cursor-pointer duration-500 hover:bg-gray-300 hover:scale-[1.03] relative">
          <h2 className="text-gray-800 font-bold">{selectedCard.name}</h2>
          <h3>{selectedCard.description}</h3>
          <p>Category: {selectedCard.category}</p>
          <p>Condition: {selectedCard.condition} </p>
          <button>
            Message user {selectedCard.user.username}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetails