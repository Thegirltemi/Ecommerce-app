import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
     <div className='home'>
      <p><i>lotrem interiors</i></p>
      <div className='home-cat'>
       <Link to='/store'>
       <h2>Shop Now</h2>
       </Link>
      </div>
    </div> 
    </>
  )
}

export default Home
