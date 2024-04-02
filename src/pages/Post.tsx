import { useEffect,  useState } from "react"
import { useParams } from "react-router-dom"
import { PostData } from '../interfaces/'
import axios from "axios"
import PostDetail from "../Components/PostDetail"

const Post: React.FC =  () =>  {
  type postParams ={
    id: string
  }
const {id }= useParams<postParams>()
const [post, setPost] = useState<PostData | null >(null)
useEffect(()=> {
  const getOnePost= async() => {
    try {
     const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
     const data : PostData = await response.data;
   
     console.log(data)
     setPost(data)
      
    } catch (error) {
      console.error(error)
      
    }
    
}
getOnePost()
},[id])

console.log(id)

  return (
    <div className='post-container'>
    <h1>detail de la publication</h1>
    {/* <h2>{post?.title} </h2>
    <p>{post?.body}</p> */}
    <PostDetail postdetail = {post}/>
    </div>
  )
}

export default Post