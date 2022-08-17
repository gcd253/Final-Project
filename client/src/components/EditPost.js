import { React, useState } from 'react'

const EditPost = ({ editDetails, setEditDetails, updatePost }) => {

    function handlePostDetailsChange(e) {
        const name = e.target.name
        const value = e.target.value
        setEditDetails({
            ...editDetails,
            [name]: value,
        })
        console.log(editDetails)
    }

    function handleSubmit(e) {
        e.preventDefault()
        updatePost(editDetails)
    }

    return (
        <div className="h-full flex justify-center items-center">
            <form className="shadow-xl flex w-2/3 flex-col justify-center items-center bg-gray-300 rounded-2xl border-red-400 border-b-4 border-t-4" onSubmit={e => handleSubmit(e)} >
                <label className="font-medium mt-2 mb-1" >Item name:</label>
                <input
                    className="block border-none p-1 rounded-lg w-2/3"
                    type="text"
                    name="name"
                    onChange={handlePostDetailsChange}
                    value={editDetails.name}
                />

                <label className="font-medium mt-2 mb-1" >Description:</label>
                <textarea
                    className="block border-none p-1 rounded-lg w-2/3 h-24"
                    name="description"
                    rows={5}
                    onChange={handlePostDetailsChange}
                    value={editDetails.description}
                />

                <label className="font-medium mt-2 mb-1" >Condition:</label>
                <input
                    className="block border-none p-1 rounded-lg w-2/3"
                    type="text"
                    name="condition"
                    onChange={handlePostDetailsChange}
                    value={editDetails.condition}
                />

                <label className="font-medium mt-2 mb-1" >Category:</label>
                <input
                    className="block border-none p-1 rounded-lg w-2/3"
                    type="text"
                    name="category"
                    onChange={handlePostDetailsChange}
                    value={editDetails.category}
                />

                <button className="duration-500 hover:text-gray-100 m-4 bg-gray-100 pl-6 pr-6 pt-2 pb-2 rounded-full hover:bg-red-400 hover:scale-[1.02]" type="submit" value="Post">
                    Commit changes
                </button>
            </form>
        </div>
    )
}

export default EditPost