import React from 'react'
import { PostData } from '../interfaces'
import './PostsList.css'
import { useNavigate } from 'react-router-dom'
interface PostListProps {
  allPosts :PostData[] | null
}
const  PostsList: React.FC <PostListProps> = ({allPosts }) => {
  const navigate = useNavigate()
  return (
  <ul className='Posts'>
    
    { allPosts?.map(post => 
    <li key={post.id} onClick={() => navigate(`/${post.id}`)}>
            <h2>{post.title}</h2>
            <p>Lire l'article</p>

    </li>)}

  </ul>
  )
}

export default PostsList