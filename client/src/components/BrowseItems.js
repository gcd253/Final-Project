import React from 'react'
import ItemCard from './ItemCard'

const BrowseItems = ({ postData, selectCard }) => {

  return (
    <div className="text-gray-600 grid md:grid-cols-3 gap-10" >
      {postData.map(post => <ItemCard 
      key={post.id} 
      id={post.id}
      name={post.name} 
      des={post.description} 
      condition={post.condition}
      category={post.category}
      poster={post.user.username}
      selectCard={selectCard}
      />)}
    </div>
  )
}

export default BrowseItems