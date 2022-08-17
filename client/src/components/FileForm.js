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
            <form className="shadow-xl flex w-2/3 flex-col justify-center items-center bg-gray-300 rounded-2xl border-red-400 border-b-4 border-t-4 my-12" onSubmit={e => handleSubmit(e)} >
                <label className="font-medium mt-2 mb-1" >Item name:</label>
                <input
                    className="block border-none p-2 pl-4 rounded-lg w-2/3"
                    type="text"
                    name="name"
                    onChange={handlePostDetailsChange}
                    value={postDetails.name}
                />

                <label className="font-medium mt-2 mb-1" >Description:</label>
                <textarea
                    className="block border-none p-2 pl-4 rounded-lg w-2/3"
                    name="description"
                    rows={5}
                    onChange={handlePostDetailsChange}
                    value={postDetails.description}
                />

                <label className="font-medium mt-2 mb-1" >Condition:</label>
                <input
                    className="block border-none p-2 pl-4 rounded-lg w-2/3"
                    type="text"
                    name="condition"
                    onChange={handlePostDetailsChange}
                    value={postDetails.condition}
                />

                <label className="font-medium mt-2 mb-1" >Category:</label>
                <input
                    className="block border-none p-2 pl-4 rounded-lg w-2/3"
                    type="text"
                    name="category"
                    onChange={handlePostDetailsChange}
                    value={postDetails.category}
                />

                <label className="font-medium mt-2 mb-1" >Image(s):</label>
                <input
                    className="block border-none p-2 pl-4 rounded-lg w-2/3"
                    type="file"
                    name="image"
                    id="image"
                    placeholder="Image(s)"
                />
                <button className="duration-500 hover:text-gray-100 m-4 bg-gray-100 pl-6 pr-6 pt-2 pb-2 rounded-full hover:bg-red-400 hover:scale-[1.02]" type="submit" value="Post">
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