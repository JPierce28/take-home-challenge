import React, { useEffect, useState } from 'react'
import './Home.css'
import Header from '../Header/Header'

const Home = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=9GLryxGbI4IPesd7tXkh0KKw9VAuZMNE', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => setArticles(data.results))
  }, [])

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
        <h1>Articles go here</h1>
      </div>
    </section>
  )
}

export default Home;