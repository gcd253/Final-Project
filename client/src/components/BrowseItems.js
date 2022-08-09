import React from 'react'
import ItemCard from './ItemCard'

const BrowseItems = ({ postData }) => {

  console.log(postData)
  return (
    <div>
      {postData.map(post => <ItemCard 
      key={post.id} 
      name={post.name} 
      des={post.description} 
      condition={post.condition}
      category={post.category}
      poster={post.user_id}
      />)}
    </div>
  )
}

export default BrowseItems