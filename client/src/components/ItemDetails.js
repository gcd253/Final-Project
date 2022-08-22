import { React, useState } from 'react'
import SendEmail from './SendEmail'

const ItemDetails = ({ selectedCard, setSelectedCard, user }) => {

  const [emailFormActive, setEmailFormActive] = useState(false)

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

            <button onClick={() => setEmailFormActive(!emailFormActive)} className="duration-500 hover:text-gray-100 m-4 bg-gray-100 pl-4 pr-4 pt-2 pb-2 rounded-full hover:bg-red-400 dark:bg-slate-500 dark:hover:bg-slate-100 dark:text-slate-400 dark:shadow-xl absolute bottom-0 right-0" >
              <div className="flex flex-row">
                <p>Message</p>
                <p className="duration-500 hover:text-red-500 ml-1 dark:text-slate-200 dark:hover:text-slate-800" >{selectedCard.image.record.user.username}</p>
              </div>
            </button>

          </span>
        </div>
        
      </div>
      {emailFormActive ? <SendEmail user={user.username} email={user.email} selectedEmail={selectedCard.image.record.user.email} selectedUser={selectedCard.image.record.user.username}  /> : null }
      </div>
      : null
  )
}

export default ItemDetails