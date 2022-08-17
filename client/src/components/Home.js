import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Home = ({ user, onLogout, setDarkMode, darkMode }) => {
  return (
    <div>
      <Navbar user={user} onLogout={onLogout} darkMode={darkMode} setDarkMode={setDarkMode} />
      <Outlet />
    </div>
  )
}

export default Home