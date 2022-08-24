import React from 'react'
import DonationLinks from './DonationLinks'

const Landing = () => {
  return (
    <>

      <div className="flex flex-col dark:text-slate-200 dark:bg-slate-900 justify-center items-center m-auto w-4/5">
        <h1 className="text-3xl mt-14" >Title</h1>
        <h3 className="mt-4" >About this project</h3>
        <p className="bg-gray-200 dark:bg-slate-800 px-4 py-2 my-4 rounded-md" >This project is loosely inspired by a delightful and bemusing situation which is all too common in city life not to have a name, yet I have never heard a term coined for it. Say you're moving out, participating in a bit of spring cleaning, or—god forbid—purging the final remnants of your most recent live-in ex. You've come to the last few items, all of them perfectly useful, but you no longer have any need for them. Sure, you could go through the trouble of trying to sell them; but your sudden urge to redecorate won't last forever, and who in their right mind would want to buy a half-empty bag of paperclips and a single Tupperware?
          <br></br>
          <br></br>
          So what's your solution? Simply set them on the curb, of course! By the time you've climbed back up to your fourth-floor walkup, some passerby has surely already snagged a treasure from your trash. I styled this site to approximate a digital facsimile of such an encounter. I have often found myself on both ends of these exchanges, whether I am decluttering my apartment or coming across a new book that piques my interest. It is my hope that a site like this will invite more individuals to give some possessions to those who may make better use of them.
        </p>
        <br />
        <h3>Other places to donate</h3>
        <p className="bg-gray-200 dark:bg-slate-800 px-4 py-2 my-2 mb-10 rounded-md " >Perhaps you are unable or unwilling to give items away. That is, of course, completely understandable. Below, I have linked to several charity services that aim to support underserved groups of our communities, both local and global.
        <br></br>
        <br></br>
          Many of these services (Planet Aid in particular) will also accept items like clothing and shoes. The links below will redirect you to information about finding the nearest drop-off locations, if applicable.

        </p>

      </div>
      <DonationLinks />
    </>
  )
}

export default Landing