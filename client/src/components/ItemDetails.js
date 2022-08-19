import React from 'react'

const ItemDetails = ({ selectedCard }) => {
  return (
    selectedCard ?
      <div className="flex justify-center" >
        <div className="bg-gray-100 rounded grid grid-cols-2 overflow-hidden shadow-md duration-500 hover:bg-gray-300 hover:scale-[1.01] w-2/3 mt-12">
          <img src={selectedCard.image_url} alt={`User-uploaded image of ${selectedCard.name}`} />
          <span className="col-start-2 justify-items-start" >
            <h2 className="text-gray-800 font-bold pt-6">{selectedCard.name}</h2>
            <h3 className="" >{selectedCard.description}</h3>
            <p className="text-xs" >Category: {selectedCard.category}</p>
            <p className="text-xs" >Condition: {selectedCard.condition} </p>
            <p>Message user
              <button className="duration-200 hover:text-red-500 ml-1" >
                {selectedCard.image.record.user.username}
              </button>
            </p>
          </span>
        </div>
      </div>
      : null
  )
}

export default ItemDetails