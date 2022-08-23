import React from 'react'
import DonationLinks from './DonationLinks'

const Landing = () => {
  return (
    <>

      <div className="flex flex-col h-screen dark:text-slate-200 dark:bg-slate-900 justify-center items-center m-auto w-4/5">
        <h1>Title</h1>
        <h3>About this project</h3>
        <p className="bg-gray-200 dark:bg-slate-800 px-4 py-2 my-2 rounded-md " >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <br />
        <h3>Other places to donate</h3>
        <p className="bg-gray-200 dark:bg-slate-800 px-4 py-2 my-2 rounded-md " >Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Mattis vulputate enim nulla aliquet porttitor. Mi sit amet mauris commodo quis imperdiet massa. Lorem mollis aliquam ut porttitor leo a diam. Eu mi bibendum neque egestas congue. Imperdiet nulla malesuada pellentesque elit eget. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Et sollicitudin ac orci phasellus egestas. Sed turpis tincidunt id aliquet risus. Varius duis at consectetur lorem donec. Dignissim sodales ut eu sem. Ut eu sem integer vitae justo eget magna fermentum iaculis.
        </p>
        
      </div>
      <DonationLinks />
    </>
  )
}

export default Landing