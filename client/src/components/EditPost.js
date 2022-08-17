import React from 'react'

const EditPost = ({ editCard }) => {
    return (
        <div>
            <div className="bg-gray-100 rounded overflow-hidden shadow-md cursor-pointer duration-500 hover:bg-gray-300 hover:scale-[1.03] relative">
                <h2 className="text-gray-800 font-bold">{editCard.name}</h2>
                <h3>{editCard.description}</h3>
                <p>Category: {editCard.category}</p>
                <p>Condition: {editCard.condition} </p>
                <button>
                    {/* Message user {selectedCard.user.username} */}
                </button>
            </div>
        </div>
    )
}

export default EditPost