import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Home = ({ user, onLogout }) => {
  return (
    <div>
      <Navbar user={user} onLogout={onLogout} />
      <Outlet />
    </div>
  )
}

export default Home