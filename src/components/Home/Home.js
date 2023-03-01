import React, { useEffect, useState } from 'react'
import './Home.css'
import Header from '../Header/Header'
import ArticleCard from '../ArticleCard/ArticleCard'

const Home = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=9GLryxGbI4IPesd7tXkh0KKw9VAuZMNE', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => setArticles(data.results))
  }, [])

  const allArticles = articles.map(article => {
    return (
      <ArticleCard
        key={article.created_date}
        sport={article.subsection}
        story={article.abstract}
        author={article.byline}
        image={article.multimedia[0]}
      />
    )
  })

  return (
    <section className='home-page'>
      <Header/>
      <header className='page-header'>
        <h1>Home</h1>
      </header>
      <form className='filter-form'>
        <select className='filter-option'>
          <option>Josh Is Him</option>
        </select>
      </form>
      <div className='article-container'>
        {allArticles}
      </div>
    </section>
  )
}

export default Home;