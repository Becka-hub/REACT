import React from 'react'
import { Helmet } from 'react-helmet-async'
const Reservation = () => {
  return (
    <>    
    <Helmet>
      <title>Reservation client</title>
      <meta name='description' content='Reservation client.' />
      <link rel='canonical' href="/client/reservation" />
    </Helmet>
      <div>Reservation</div></>
  )
}

export default Reservation