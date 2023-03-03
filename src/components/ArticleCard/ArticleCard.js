import './ArticleCard.css'
import { Link } from 'react-router-dom'

const ArticleCard = ({ sport, story, author, image, id }) => {
  return (
    <Link to={`/details/${id}`} className='article-card'>
      <div className='image-container'>
        <img className='article-image' src={image} alt={'Image of article'}></img>
      </div>
      <div className='info-container'>
        <p>Sport: {sport}</p>
        <p>{story}</p>
        <p>{author}</p>
     </div>
    </Link>
  )
}

export default ArticleCard