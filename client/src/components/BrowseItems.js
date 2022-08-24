import { React } from 'react'
import ItemCard from './ItemCard'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const BrowseItems = ({ postData, selectCard, scrollTo, limit }) => {

  return (
    <div>
    <Outlet />
      <nav>
        <nav className="text-gray-600 grid sm:grid-cols-2 md:grid-cols-3 gap-10 p-14" >
          {postData.map(post => <ItemCard
            key={post.id}
            id={post.id}
            name={post.name}
            des={post.description}
            condition={post.condition}
            category={post.category}
            selectCard={selectCard}
            imageUrl={post.image}
            scrollToDetails={scrollTo}
            limit={limit}
          />)}
        </nav>
      </nav>
    </div>
  )
}

export default BrowseItems