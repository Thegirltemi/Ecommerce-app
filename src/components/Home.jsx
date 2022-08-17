import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
     <div className='home'>
      <div className='home-cat'>
       <Link to='men'>
       <h2>Shop for Men</h2>
       </Link>
        <Link to ='/women'>
        <p>Shop for Women</p>        
        </Link>
      </div>
    </div> 
    </>
  )
}

export default Home
