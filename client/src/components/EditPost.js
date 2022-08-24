import { React } from 'react'
import { useNavigate } from 'react-router-dom'

const EditPost = ({ editDetails, setEditDetails, updatePost, editId }) => {

    const closeIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>

    const navigate = useNavigate();

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
        updatePost(editDetails, editId)
    }

    return (
        <div className="h-full flex justify-center items-center">
            <form className="shadow-xl flex w-2/3 flex-col justify-center items-center bg-gray-300 rounded-2xl border-red-400 border-b-4 border-t-4 dark:bg-slate-800 dark:border-slate-600 mt-14 relative" onSubmit={e => handleSubmit(e)} >
                <label className="font-medium mt-2 mb-1 dark:text-white" >Item name:</label>
                <input
                    className="block border-none p-1 rounded-lg w-2/3 dark:bg-slate-700 dark:text-slate-400"
                    type="text"
                    name="name"
                    onChange={handlePostDetailsChange}
                    value={editDetails.name}
                />

                <label className="font-medium mt-2 mb-1 dark:text-white" >Description:</label>
                <textarea
                    className="block border-none p-1 rounded-lg w-2/3 h-24 dark:bg-slate-700 dark:text-slate-400"
                    name="description"
                    rows={5}
                    onChange={handlePostDetailsChange}
                    value={editDetails.description}
                />

                <label className="font-medium mt-2 mb-1 dark:text-white" >Condition:</label>
                <input
                    className="block border-none p-1 rounded-lg w-2/3 dark:bg-slate-700 dark:text-slate-400"
                    type="text"
                    name="condition"
                    onChange={handlePostDetailsChange}
                    value={editDetails.condition}
                />

                <label className="font-medium mt-2 mb-1 dark:text-white" >Category:</label>
                <input
                    className="block border-none p-1 rounded-lg w-2/3 dark:bg-slate-700 dark:text-slate-400"
                    type="text"
                    name="category"
                    onChange={handlePostDetailsChange}
                    value={editDetails.category}
                />

                <button className="duration-500 hover:text-gray-100 m-4 bg-gray-100 pl-6 pr-6 pt-2 pb-2 rounded-full hover:bg-red-400 hover:scale-[1.02] dark:bg-slate-500 dark:hover:bg-slate-100 dark:text-slate-200 dark:hover:text-slate-800 dark:shadow-xl" type="submit" value="Post">
                    Commit changes
                </button>
                <button onClick={() => navigate('/account/my-offers')} className="duration-500 hover:text-gray-100 m-2 bg-white p-1 rounded-full hover:bg-red-400 dark:bg-slate-500 hover:scale-[1.02] dark:hover:bg-slate-200 dark:text-slate-400 dark:shadow-xl absolute top-0 right-0 hover:text-gray-100 dark:text-slate-200 dark:hover:text-slate-800" > {closeIcon}
                </button>
            </form>
        </div>
    )
}

export default EditPost