import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/">Browse</Link>
        <Link to="/messages">Messages</Link>
        <Link to="/new-offer">Post an offer</Link>
    </div>
  )
}

export default Navbar