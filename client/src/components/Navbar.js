import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ onLogout, user }) => {

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => onLogout());
  }

  return (
    <div className="bg-gray-200 p-6 flex flex-row" >
      <div className="duration-200 hover:text-red-500 mx-8">
        <div>Welcome, {user.username}</div>
      </div>
      <div className="duration-200 hover:text-red-500 mx-8">
        <Link to="/items">Browse</Link>
      </div>
      <div className="duration-200 hover:text-red-500 mx-8">
        <Link to="/activities">My Account</Link>
      </div>
      <div className="duration-200 hover:text-red-500 mx-8">
        <button onClick={handleLogout} >
          Log out
        </button>
      </div>
    </div>
  )
}

export default Navbar