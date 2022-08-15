import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import BrowseItems from './components/BrowseItems';
import MyActivities from './components/MyActivities';
import OfferItem from './components/OfferItem';
import ItemDetails from './components/ItemDetails';
import { useEffect, useState } from 'react'
import Signup from './components/Signup';
import Login from './components/Login';

function App() {

  const [postData, setPostData] = useState([])
  const [postId, setPostId] = useState('')
  const [newPostImage, setNewPostImage] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/me')
      .then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user));
        }
      });
  }, []);

  useEffect(() => {
    fetch('/posts')
      .then(res => res.json())
      .then(itemData => setPostData(itemData))
  }, [])

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
        setNewPostImage(success.image_url)
      })
      .catch(error => console.error(error)
      );
  }

  function onLogout() {
    setUser(null)
  }

  return (
    <div className="App">
      {user ? (
        <div>
          <Navbar onLogout={onLogout} />
          <Routes>
            <Route path="/" element={<BrowseItems postData={postData} selectCard={handleSelect} newPostImage={newPostImage} />} />
            <Route path="/messages" element={<MyActivities uploadPost={uploadPost} newPostImage={newPostImage} />} />
            <Route path="/new-offer" element={<OfferItem />} />
          </Routes>
        </div>) :
          <Routes>
            <Route path="/login" element={<Login onLogin={setUser} />} />
            <Route path="/signup" element={<Signup onLogin={setUser} />} />
          </Routes>
      }
    </div>
  );
}

export default App;
