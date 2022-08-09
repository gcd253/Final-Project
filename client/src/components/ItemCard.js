import React from 'react'

const ItemCard = ({ name, des, condition, category, poster }) => {
  return (
    <div>
        <h2>{name}</h2>
        <h3>{des}</h3>
        <p>Category: {category}</p>
        <p>Condition: {condition}</p>
        <p>Posted by: {poster}</p>
    </div>
  )
}

export default ItemCard