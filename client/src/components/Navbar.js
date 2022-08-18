import React from 'react'
import { Link } from 'react-router-dom'

const homeIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>

const moonIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>

const sunIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>

const Navbar = ({ onLogout, user, setDarkMode, darkMode }) => {

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => onLogout());
  }

  return (
    <div className="bg-gray-200 p-6 flex flex-row relative dark:bg-slate-700" >
      <div className="cursor-pointer duration-200 hover:text-red-500 dark:text-slate-400 dark:hover:text-slate-200">
        <div>{homeIcon}</div>
      </div>
      <div className="mx-8">
        <div className="dark:text-slate-400" >Welcome, {user.username}</div>
      </div>
      <div className="duration-200 hover:text-red-500 mx-8 font-medium dark:text-slate-400 dark:hover:text-slate-200">
        <Link to="/items">Browse</Link>
      </div>
      <div className="duration-200 hover:text-red-500 mx-8 font-medium dark:text-slate-400 dark:hover:text-slate-200">
        <Link to="/activities">My Account</Link>
      </div>
      <div className="duration-200 hover:text-red-500 mx-8 font-medium dark:text-slate-400 dark:hover:text-slate-200">
        <button onClick={handleLogout} >
          Log out
        </button>
      </div>
      <div className="cursor-pointer duration-200 hover:text-red-500 absolute right-8 dark:text-slate-400 dark:hover:text-slate-200">
        <button onClick={() => setDarkMode(!darkMode)} >
          { darkMode ? moonIcon : sunIcon}
        </button>
      </div>
    </div>
  )
}

export default Navbar