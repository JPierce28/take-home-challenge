import React from 'react'
import './Header.css'
import { useLocation, Link } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  return (
    <div className='global-header'>
      {location.pathname === '/' && <h1>NYT Sports</h1>}
      {location.pathname !== '/' && 
      <Link to={'/'}>
        <h1>Return Home</h1>
      </Link>}
    </div>
  )
}

export default Header
