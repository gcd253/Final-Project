import React from 'react'
import UserPosts from './UserPosts'
import { Outlet } from 'react-router-dom'

const OfferItem = ({ data, userPosts, editPost, deletePost }) => {
  return (
    <div className="h-auto dark:bg-slate-900">
      <Outlet />
      <div>
        {data.length > 0 ? <div className="text-gray-600 grid sm:grid-cols-2 md:grid-cols-3 gap-10 p-14" >
          {data.map(item => <UserPosts
            key={item.id}
            id={item.id}
            name={item.name}
            des={item.description}
            condition={item.condition}
            category={item.category}
            imageUrl={item.image}
            userPosts={userPosts}
            editPost={editPost}
            deletePost={deletePost}
          />)}
        </div> :
          <h1 className="my-12 dark:text-slate-400" >You don't have any posts yet!</h1>}
      </div>
    </div>
  )
}

export default OfferItem