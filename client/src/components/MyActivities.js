import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MyActivities = ({ uploadPost, newPostImage, userPosts }) => {
  return (
    <div className="h-full" >

      <div className="p-4 flex flex-row justify-center items-center bg-gray-300 dark:bg-slate-800" >
        <div onClick={userPosts} className="duration-500 mx-8 bg-gray-400 text-gray-100 pl-6 pr-6 rounded-full hover:bg-red-500 hover:text-white hover:scale-[1.03] dark:bg-slate-600 dark:hover:bg-slate-400 dark:text-slate-200 dark:hover:text-slate-900 dark:shadow-xl" >
          <Link to="/activities/my-offers">My offers</Link>
        </div>
        <div className="duration-500 mx-8 bg-gray-400 text-gray-100 pl-6 pr-6 rounded-full hover:bg-red-500 hover:text-white hover:scale-[1.03] dark:bg-slate-600 dark:hover:bg-slate-400 dark:text-slate-200 dark:hover:text-slate-900 dark:shadow-xl" >
          <Link to="/activities/my-messages">My messages</Link>
        </div>
        <div className="duration-500 mx-8 bg-gray-400 text-gray-100 pl-6 pr-6 rounded-full hover:bg-red-500 hover:text-white hover:scale-[1.03] dark:bg-slate-600 dark:hover:bg-slate-400 dark:text-slate-200 dark:hover:text-slate-900 dark:shadow-xl" >
          <Link to="/activities/new-offer">Post a new offer</Link>
        </div>
      </div>

      <Outlet />

    </div>
  )
}

export default MyActivities