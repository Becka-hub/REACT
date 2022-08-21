import React from 'react'
import { Helmet } from 'react-helmet-async'
const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home</title>
      <meta name='description' content='Home page.' />
      <link rel='canonical' href="/home"/>
    </Helmet>
      <h1 className='text-center'>Home</h1>
    </>
  )
}

export default Home