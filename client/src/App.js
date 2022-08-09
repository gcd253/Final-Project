import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BrowseItems from './components/BrowseItems';
import Messages from './components/Messages';
import OfferItem from './components/OfferItem';
import { useEffect, useState } from 'react'

function App() {

  const [postData, setPostData] = useState([])

  useEffect(()=> {
    fetch('/posts')
      .then(res => res.json())
      .then(itemData => setPostData(itemData))

  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BrowseItems postData={postData} />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/new-offer" element={<OfferItem />}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
