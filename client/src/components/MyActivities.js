import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MyActivities = ({ uploadPost, newPostImage }) => {
  return (
    <div>My Activities: messages and posts
      <div className="p-6 flex flex-row" >
        <div className="duration-500 mx-8 bg-gray-400 text-gray-100 p-4 pl-6 pr-6 rounded-full hover:bg-red-500 hover:text-white hover:scale-[1.03]" >
          <Link to="/activities/my-offers">My offers</Link>
        </div>
        <div className="duration-500 mx-8 bg-gray-400 text-gray-100 p-4 pl-6 pr-6 rounded-full hover:bg-red-500 hover:text-white hover:scale-[1.03]" >
          <Link to="/activities/my-messages">My messages</Link>
        </div>
        <div className="duration-500 mx-8 bg-gray-400 text-gray-100 p-4 pl-6 pr-6 rounded-full hover:bg-red-500 hover:text-white hover:scale-[1.03]" >
          <Link to="/activities/new-offer">Post a new offer</Link>
        </div>
      </div>

      <Outlet />
    </div>
  )
}

export default MyActivities