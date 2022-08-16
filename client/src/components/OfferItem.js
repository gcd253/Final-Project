import React from 'react'
import UserPosts from './UserPosts'

const OfferItem = ({ data, userPosts }) => {
  return (
    <div>
      {data.length > 0 ? <div className="text-gray-600 grid md:grid-cols-3 gap-10 p-14" >
        {data.map(item => <UserPosts
          key={item.id}
          id={item.id}
          name={item.name}
          des={item.description}
          condition={item.condition}
          category={item.category}
          imageUrl={item.image}
          userPosts={userPosts}
        />)}
      </div> : 
      <h1>You don't have any posts yet!</h1>}
    </div>
  )
}

export default OfferItem