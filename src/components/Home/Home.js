import React, { useEffect, useState } from 'react'
import './Home.css'
import Header from '../Header/Header'
import ArticleCard from '../ArticleCard/ArticleCard'

const Home = () => {
  const [articles, setArticles] = useState([])
  const [filteredArticles, setFilteredArticles] = useState([])
  let allSports = []

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=9GLryxGbI4IPesd7tXkh0KKw9VAuZMNE', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
      setArticles(data.results)
      setFilteredArticles(data.results)
    })
  }, [])


  const allArticles = filteredArticles.map(article => {
    return (
      <ArticleCard
        key={article.created_date}
        sport={article.subsection}
        story={article.abstract}
        author={article.byline}
        image={article.multimedia[0].url}
        id={article.created_date}
      />
    )
  })
  
  const allOptions = articles.forEach(article => {
    if(!allSports.includes(article.subsection) && article.subsection !== '') {
      allSports.push(article.subsection)
    }
    return allSports
  })

  const setOptions = allSports.map(sport => {
    return (
      <option value={sport} key={sport}>{sport}</option>
    )
  })

  const filterSports = (value) => {
    if(value === "All Sports") {
      setFilteredArticles(articles)
    } else {
      let display = articles.filter(article => {
        return article.subsection === value
      })
      setFilteredArticles(display)
    }
  }

  return (
    <section className='home-page'>
      <Header/>
      <header className='page-header'>
        <h1>Home</h1>
      </header>
      <h2>Filter By Sport</h2>
      <form className='filter-form'>
        <select className='filter-option' onChange={event => filterSports(event.target.value)}>
          <option>All Sports</option>
          {setOptions}
        </select>
      </form>
      <div className='article-container'>
        {allArticles}
      </div>
    </section>
  )
}

export default Home;