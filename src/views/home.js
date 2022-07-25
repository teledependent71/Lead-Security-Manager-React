import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Lead Security Manager</title>
        <meta property="og:title" content="Lead Security Manager" />
      </Helmet>
    </div>
  )
}

export default Home
