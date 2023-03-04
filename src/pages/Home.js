import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>My home page
      <p>
        Go to <Link to="/products" >the list of products</Link>
      </p>
    </div>
  )
}

export default Home