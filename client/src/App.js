import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import BrowseItems from './components/BrowseItems';
import MyActivities from './components/MyActivities';
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

  function uploadPost(data) {

    fetch('/posts', {
      method: 'POST',
      body: data,
    })
      .then(res => res.json())
      .then(success => {
        console.log(success.image_url)
      })
      .catch(error => console.error(error)
    );
  }
  

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BrowseItems postData={postData} selectCard={handleSelect} />} />
          <Route path="/messages" element={<MyActivities uploadPost={uploadPost} />} />
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
