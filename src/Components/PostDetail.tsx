import { Link } from 'react-router-dom'
import {PostData} from '../interfaces'
interface postdetailProps  {
postdetail : PostData | null
}
const PostDetail : React.FC <postdetailProps> = ({postdetail}) =>  {
  return (
    <div>
    <h2>Titre : { postdetail?.title}</h2>
    <p> Body : {postdetail?.body}</p>
    <Link to="/">Page principal</Link>

    
    </div>
  )
}
export default  PostDetail