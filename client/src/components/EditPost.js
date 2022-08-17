import { React, useState } from 'react'

const EditPost = ({ editDetails, setEditDetails }) => {

    function handlePostDetailsChange(e) {
        const name = e.target.name
        const value = e.target.value
        setEditDetails({
            ...editDetails,
            [name]: value,
        })
        console.log(editDetails)
    }

    return (
        <div className="h-full flex justify-center items-center">
            <form className="flex w-2/3 flex-col justify-center items-center bg-gray-300 rounded-lg" >
                <label>Item name:</label>
                <input
                    className="block border-none p-1 rounded-lg w-2/3"
                    type="text"
                    name="name"
                    onChange={handlePostDetailsChange}
                    value={editDetails.name}
                />

                <label>Description:</label>
                <textarea
                    className="block border-none p-1 rounded-lg w-2/3 h-24"
                    name="description"
                    rows={5}
                    onChange={handlePostDetailsChange}
                    value={editDetails.description}
                />

                <label>Condition:</label>
                <input
                    className="block border-none p-1 rounded-lg w-2/3"
                    type="text"
                    name="condition"
                    onChange={handlePostDetailsChange}
                    value={editDetails.condition}
                />

                <label>Category:</label>
                <input
                    className="block border-none p-1 rounded-lg w-2/3"
                    type="text"
                    name="category"
                    onChange={handlePostDetailsChange}
                    value={editDetails.category}
                />

                <button className="border-none p-1 uppercase rounded-2xl font-bold bg-blue-600 m-4" type="submit" value="Post">
                    Edit
                </button>
            </form>
        </div>
    )
}

export default EditPost