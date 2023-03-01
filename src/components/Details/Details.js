import React from 'react'
import './Details.css'
import Header from '../Header/Header'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Details = () => {
  const [currentArticle, setCurrentArticle] = useState({})
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
    })
  }, [])

  return (
    <section className='details-page'>
      <Header/>
      <div className='article-title'>

      </div>
      <div className='article-details'>

      </div>
      <div className='footer'>

      </div>
    </section>
  )
}

export default Details