import { React, useState, useEffect } from 'react'

const UserPosts = ({ name, des, condition, category, id, imageUrl, userPosts, editPost, deletePost, limit }) => {

    const pencilIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
    const binIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>

    return (
        <div>
            <div className="bg-gray-100 rounded overflow-hidden shadow-md cursor-pointer duration-500 hover:bg-gray-200 relative pb-12 dark:bg-slate-800 dark:hover:scale-[1.01]">
                <img src={imageUrl} alt="an image of the item" ></img>
                <h2 className="text-gray-800 font-bold dark:text-white">{name}</h2>
                <h3 className="dark:text-slate-400 px-2" >{limit(des)}</h3>
                <div className="rounded-full text-xs text-gray-100 pt-1 pb-1 ml-6 mb-2 bottom-0 left-0 bg-gray-400 w-1/3 absolute duration-300 hover:scale-[1.02] hover:bg-gray-500 dark:bg-slate-500 dark:hover:bg-slate-400 dark:text-slate-200 dark:hover:text-slate-900 dark:shadow-xl" >
                    <button onClick={() => editPost(id)} >{pencilIcon}</button>
                </div>
                <div className="rounded-full text-xs text-gray-100 pt-1 pb-1 mr-6 mb-2 bottom-0 right-0 bg-red-400 w-1/3 absolute duration-300 hover:scale-[1.02] hover:bg-red-500" >
                    <button onClick={() => deletePost(id)}>{binIcon}</button>
                </div>
            </div>

        </div>
    )
}

export default UserPosts

