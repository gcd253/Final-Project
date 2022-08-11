import { React, useState, useReducer } from 'react'

const FileForm = ({ uploadPost }) => {

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
        data.append('user_id', 1)

        data.append('image', e.target.image.files[0]);
        uploadPost(data);
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)} >
                <label>Item name:</label>
                <input
                    type="text"
                    name="name"
                    onChange={handlePostDetailsChange}
                    value={postDetails.name}
                />

                <label>Description:</label>
                <input
                    type="text"
                    name="description"
                    onChange={handlePostDetailsChange}
                    value={postDetails.description}
                />

                <label>Condition:</label>
                <input
                    type="text"
                    name="condition"
                    onChange={handlePostDetailsChange}
                    value={postDetails.condition}
                />

                <label>Category:</label>
                <input
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
                <button type="submit" value="Post">
                    Post
                </button>
            </form>
        </div>
    )
}

export default FileForm