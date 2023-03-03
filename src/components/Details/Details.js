import React from 'react'
import './Details.css'
import Header from '../Header/Header'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Details = () => {
  const [currentArticle, setCurrentArticle] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const { id } = useParams()

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=9GLryxGbI4IPesd7tXkh0KKw9VAuZMNE', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
      let newArticle = data.results.find(article => {
        return article.created_date === id
      })
      setCurrentArticle(newArticle)
      setIsLoading(false)
    })
    .catch(error => {
      console.group(error)
      setErrorMessage("Something went wrong please refresh the page or try later...")
  })
  }, [])

  return (
    <section className='details-page'>
      {isLoading && <h1>Loading Article</h1>}
      <Header/>
      {errorMessage !== '' && <h1>{errorMessage}</h1>}
      {isLoading === true && <h1>Loading Article</h1>}
      <div className='article-title'>
        <h1>{currentArticle.title}</h1>
        <h3>{currentArticle.byLine}</h3>
      </div>
      <div className='article-details'>
        <div className='image-container'>
          {isLoading && <h1>Loading Article</h1>}
          {!isLoading && <img className='current-image' src={currentArticle.multimedia[0].url} alt={"image of current article"}></img>}
        </div>
        <div className='story-container'>
          <p>{currentArticle.abstract}</p>
          <p>Link to NYT Article: </p>
          <Link to={currentArticle.short_url}>Here</Link>
        </div>
      </div>
      <div className='footer'>
        
      </div>
    </section>
  )
}

export default Details