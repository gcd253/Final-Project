import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import BrowseItems from './components/BrowseItems';
import MyActivities from './components/MyActivities';
import OfferItem from './components/OfferItem';
import ItemDetails from './components/ItemDetails';
import { useEffect, useState } from 'react'
import Signup from './components/Signup';
import Login from './components/Login';
import FileForm from './components/FileForm';
import Home from './components/Home';
import EditPost from './components/EditPost';
import Landing from './components/Landing';

function App() {

  const storedDarkMode = JSON.parse(localStorage.getItem("DARK_MODE"));

  const [postData, setPostData] = useState([])
  const [newPostImage, setNewPostImage] = useState('')
  const [user, setUser] = useState({ "username": "", "email": "" })
  const [selectedCard, setSelectedCard] = useState('')
  const [userPostData, setUserPostData] = useState([])
  const [darkMode, setDarkMode] = useState(storedDarkMode)
  const [deleted, setDeleted] = useState([])
  const [editId, setEditId] = useState(0)

  const [editDetails, setEditDetails] = useState({
    name: "",
    description: "",
    condition: "",
    category: ""
  })

  const navigate = useNavigate();

  useEffect(() => {
    fetch('/me')
      .then((response) => {
        if (response.ok) {
          response.json().then((userData) => setUser(userData));
        }
      });
  }, []);

  useEffect(() => {
    fetch('/posts')
      .then(res => res.json())
      .then(itemData => setPostData(itemData))
  }, [deleted, newPostImage])

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
    navigate('/items')
  }

  function onLogout() {
    setUser({ "username": "", "email": "" })
    navigate('/login')
    console.log(user)
  }

  function handleSelect(id) {
    fetch(`/posts/${id}`)
      .then(res => res.json())
      .then(card => setSelectedCard(card))
    // navigate(`/items/${id}`)
  }

  function userPosts() {
    fetch('/user-offers')
      .then(res => res.json())
      .then(res => setUserPostData(res))
  }

  function editPost(post_id) {
    setEditId(post_id)
    fetch(`/posts/${post_id}`)
      .then(res => res.json())
      .then(card => setEditDetails({
        name: card.name,
        description: card.description,
        condition: card.condition,
        category: card.category
      }))
    navigate(`/account/my-offers/${post_id}`)
  }

  function updatePost(data, id) {
    fetch(`/posts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => console.log(res))
  }

  function deletePost(postId) {
    fetch(`/posts/${postId}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(res => setDeleted(res))
  }

  useEffect(() => {
    userPosts()
  }, [deleted])


  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode]);

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <div className="h-auto dark:bg-slate-900" >
        <Routes>

          <Route path="/" element={<Home user={user} onLogout={onLogout} darkMode={darkMode} setDarkMode={setDarkMode} userPosts={userPosts} />}>
            <Route path="/home" element={<Landing />} />
            <Route path="/items" element={<BrowseItems postData={postData} newPostImage={newPostImage} selectCard={handleSelect} />}>
              <Route path=":id" element={<ItemDetails selectedCard={selectedCard} setSelectedCard={setSelectedCard} user={user} />} />
            </Route>
            <Route path="/account" element={<MyActivities userPosts={userPosts} uploadPost={uploadPost} newPostImage={newPostImage} />}>
              <Route path="my-offers" element={<OfferItem userPosts={userPosts} data={userPostData} editPost={editPost} deletePost={deletePost} />}>
                <Route path=":id" element={<EditPost editId={editId} editDetails={editDetails} setEditDetails={setEditDetails} updatePost={updatePost} />} />
              </Route>
              <Route path="new-offer" element={<FileForm user={user} uploadPost={uploadPost} />} />

            </Route>
          </Route>

          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/signup" element={<Signup onLogin={setUser} />} />
          <Route
            path="*"
            element={
              <main className="h-screen dark:bg-slate-900">
                <p className="p-24 dark:text-slate-400 font-medium">Uh oh! Looks like there's nothing here...</p>
              </main>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;