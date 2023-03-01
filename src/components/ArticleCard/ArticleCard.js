import React from 'react'
import './ArticleCard.css'

const ArticleCard = ({ sport, story, author, image }) => {
  return (
    <div className='article-card'>
      <div className='image-container'>
        <img className='article-image' src={image} alt={'Image of article'}></img>
      </div>
      <div className='info-container'>
        <p>{sport}</p>
        <p>{story}</p>
        <p>{author}</p>
      </div>
    </div>
  )
}

export default ArticleCard