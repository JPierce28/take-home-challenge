import React from 'react'
import './Home.css'
import Header from '../Header/Header'

const Home = () => {
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