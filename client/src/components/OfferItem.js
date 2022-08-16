import React from 'react'
import ItemCard from './ItemCard'

const OfferItem = ({ data }) => {
  return (
    <div className="text-gray-600 grid md:grid-cols-3 gap-10 p-14" >
      {data.map(item => <ItemCard
        key={item.id}
        id={item.id}
        name={item.name}
        des={item.description}
        condition={item.condition}
        category={item.category}
        imageUrl={item.image}
      />)}
    </div>
  )
}

export default OfferItem