import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Home = ({ user, onLogout, setDarkMode, darkMode, userPosts }) => {
  return (
    <div className="h-full ">
      <Navbar user={user} onLogout={onLogout} darkMode={darkMode} setDarkMode={setDarkMode} userPosts={userPosts} />
      <Outlet />
    </div>
  )
}

export default Home