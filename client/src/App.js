import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import BrowseItems from './components/BrowseItems';
import Messages from './components/Messages';
import OfferItem from './components/OfferItem';
import ItemDetails from './components/ItemDetails';
import { useEffect, useState } from 'react'

function App() {

  const [postData, setPostData] = useState([])
  const [postId, setPostId] = useState('')

  useEffect(()=> {
    fetch('/posts')
      .then(res => res.json())
      .then(itemData => setPostData(itemData))
  },[])

  function handleSelect(id) {
    fetch(`/posts/${id}`)
      .then(res => res.json())
      .then(selectedCard => setPostId(selectedCard.id))
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BrowseItems postData={postData} selectCard={handleSelect} />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/new-offer" element={<OfferItem />} />
          { useEffect(() => {
            console.log(postId)
          }, [postId])
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
