import React, { useEffect, useState } from 'react'
import './Home.css'
import Header from '../Header/Header'
import ArticleCard from '../ArticleCard/ArticleCard'

const Home = () => {
  const [articles, setArticles] = useState([])
  const [filteredArticles, setFilteredArticles] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  let allSports = []

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=9GLryxGbI4IPesd7tXkh0KKw9VAuZMNE', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
      if(data.results.length !== 0){
      setArticles(data.results)
      setFilteredArticles(data.results)
      } else {
        throw new Error("Something went wrong please refresh the page or try later...")
      }
    })
    .catch(error => {
        console.group(error)
        setErrorMessage("Something went wrong please refresh the page or try later...")
    })
  }, [])

  const allArticles = filteredArticles.map(article => {
    return (
      <ArticleCard
        key={article.created_date}
        sport={article.subsection}
        story={article.title}
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
        {errorMessage !== '' && <h1>{errorMessage}</h1>}
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