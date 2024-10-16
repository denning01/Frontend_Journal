import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Post from './components/Post';


function App() {
  const [post, setPost] = useState([])

  const fetchPosts = async()=>{
    let res = await fetch('http://localhost:8888/posts')
    let data = await res.json()
    console.log(data)
    setPost(data)
   
 }

 useEffect(()=>{
  fetchPosts()
  console.log(post)
 },[])


  return (
    <div>
      {/* <Post/> */}
      {/* <PostForm/> */}
      <PostList posts={post}/>
    </div>
   
  )
}

export default App
