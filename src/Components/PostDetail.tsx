import {PostData} from '../interfaces'
interface postdetailProps  {
postdetail : PostData | null
}
const PostDetail : React.FC <postdetailProps> = ({postdetail}) =>  {
  return (
    <div>
    <h2>Title : { postdetail?.title}</h2>
    <p> Body : {postdetail?.body}</p>
    
    </div>
  )
}
export default  PostDetail