import { React, useState } from 'react'
import SendEmail from './SendEmail'

const ItemDetails = ({ selectedCard, setSelectedCard, user }) => {

  const [emailFormActive, setEmailFormActive] = useState(false)

  const closeIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>

  const envelopeIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>

  return (
    selectedCard ?
      <div>
        <div className="flex justify-center" >
          <div className="bg-gray-100 rounded grid grid-cols-2 overflow-hidden shadow-md duration-500 hover:bg-gray-300 hover:scale-[1.01] w-2/3 mt-12 relative dark:bg-slate-800">
            <img src={selectedCard.image_url} alt={`User-uploaded image of ${selectedCard.name}`} />
            <button onClick={() => setSelectedCard('')} className="bg-gray-100 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2 hover:scale-[1.03] duration-500 opacity-40 hover:opacity-90">
              <span>Close Details</span>
            </button>
            <span className="col-start-2 justify-items-start" >
              <h2 className="text-gray-800 font-bold pt-6 dark:text-white">{selectedCard.name}</h2>
              <h3 className="dark:text-slate-400" >{selectedCard.description}</h3>
              <p className="text-xs dark:text-slate-400" >Category: {selectedCard.category}</p>
              <p className="text-xs dark:text-slate-400" >Condition: {selectedCard.condition} </p>

              <button onClick={() => setEmailFormActive(!emailFormActive)} className="duration-500 hover:text-gray-100 m-4 bg-white pl-4 pr-4 pt-2 pb-2 rounded-full hover:bg-red-400 dark:bg-slate-500 dark:hover:bg-slate-300 dark:text-slate-400 dark:shadow-xl absolute bottom-0 right-0" >
                <div className="flex flex-row">
                  <p className="duration-500 hover:text-gray-100 dark:text-slate-200 dark:hover:text-slate-800" >{emailFormActive ? closeIcon : envelopeIcon } </p>
                </div>
              </button>

            </span>
          </div>

        </div>
        {emailFormActive ? <SendEmail user={user.username} email={user.email} selectedEmail={selectedCard.image.record.user.email} selectedUser={selectedCard.image.record.user.username} /> : null}
      </div>
      : null
  )
}

export default ItemDetails