import axios from 'axios';
import './Posts.css'
import PostsList from '../Components/PostsList'
import { useEffect, useState } from 'react'
import { PostData } from '../interfaces/'
const Posts: React.FC = () => {
    const [allPosts, setAllPosts] = useState<PostData[] | null> (null);
    const [numberOfPosts, setNumberOfPosts] = useState<number>(5);
    // console.log(allPosts)
    const localOrstateNumberOfPosts = () => localStorage.getItem('number') || numberOfPosts
    const localOrstateNum = localOrstateNumberOfPosts()
    useEffect(() => {
      const getPosts =async()=> {
        try {
            // const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${localOrstateNum}`)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${localOrstateNum}`)
        console.log(response.data );
         const data : PostData[] = await response.data;
         setAllPosts(data);
        // console.log(data);
        } catch (error) {
          console.log(error);
        }
      
      }
      getPosts()
    },[localOrstateNum] );
    const onRange = (e:  React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault(); 
   setNumberOfPosts(+e.target.value)
   localStorage.setItem('number', e.target.value)


    }
      return (
    <div className='post-container'>
    <h1>page principal</h1>
    <div style={{display: 'flex', flexDirection:'column'}}>
        <label htmlFor='posts'>Nombres de publication : {localOrstateNum}</label>
        <input type="range"  min={2} max={20} onChange={onRange} value={localOrstateNum}/>
        <PostsList allPosts = {allPosts} />
    </div>
    </div>
  )
}

export default Posts