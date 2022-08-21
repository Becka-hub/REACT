import React from 'react'
import { Helmet } from 'react-helmet-async'
const Profile = () => {
  return (
    <>
      <Helmet>
        <title>Profile client</title>
        <meta name='description' content='Profile client.' />
        <link rel='canonical' href="/client/profile" />
      </Helmet>
      <div>Profile</div></>
  )
}

export default Profile