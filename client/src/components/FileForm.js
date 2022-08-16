import { React, useState } from 'react'

const FileForm = ({ uploadPost, newPostImage, user }) => {

    const [postDetails, setPostDetails] = useState({
        name: "",
        description: "",
        condition: "",
        category: ""
    })

    function handlePostDetailsChange(e) {
        const name = e.target.name
        const value = e.target.value
        setPostDetails({
            ...postDetails,
            [name]: value,
        })
        console.log(postDetails)
    }

    function handleSubmit(e) {
        e.preventDefault()
        // const files = e.target.image.files[0]
        // uploadPost(files, postDetails)

        const data = new FormData();

        data.append('name', postDetails.name);
        data.append('description', postDetails.description)
        data.append('condition', postDetails.condition);
        data.append('category', postDetails.category)
        data.append('user_id', user.id)

        data.append('image', e.target.image.files[0]);
        uploadPost(data);
    }

    return (
        <div className="h-full flex justify-center items-center">
            <form className="flex w-2/3 flex-col justify-center items-center bg-gray-300 rounded-lg" onSubmit={e => handleSubmit(e)} >
                <label>Item name:</label>
                <input
                    className="block border-none p-1 rounded-lg w-2/3"
                    type="text"
                    name="name"
                    onChange={handlePostDetailsChange}
                    value={postDetails.name}
                />

                <label>Description:</label>
                <textarea
                    className="block border-none p-1 rounded-lg w-2/3 h-24"
                    name="description"
                    rows={5}
                    onChange={handlePostDetailsChange}
                    value={postDetails.description}
                />

                <label>Condition:</label>
                <input
                    className="block border-none p-1 rounded-lg w-2/3"
                    type="text"
                    name="condition"
                    onChange={handlePostDetailsChange}
                    value={postDetails.condition}
                />

                <label>Category:</label>
                <input
                    className="block border-none p-1 rounded-lg w-2/3"
                    type="text"
                    name="category"
                    onChange={handlePostDetailsChange}
                    value={postDetails.category}
                />

                <label>Image(s):</label>
                <input
                    type="file"
                    name="image"
                    id="image"
                    placeholder="Image(s)"
                />
                <button className="border-none p-1 uppercase rounded-2xl font-bold bg-blue-600 m-4" type="submit" value="Post">
                    Post
                </button>
            </form>
            {newPostImage ?
                <img src={newPostImage} alt='an image' /> :
                null
            }
        </div>
    )
}

export default FileForm