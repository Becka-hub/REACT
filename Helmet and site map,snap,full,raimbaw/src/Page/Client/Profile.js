import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { Helmet } from 'react-helmet-async'
const Profile = () => {

  return (

    <>
      <Helmet>
        <title>Profile client</title>
        <meta name='description' content='Profile client.' />
        <link rel='canonical' href="/client/profile" />
      </Helmet>
      <div>Profile</div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={[
          { title: 'event 1', date: '2022-07-01' },
          {
            title: 'Event2', date: '2022-07-05'
          }
        ]
      }

      />
    </>

  )
}

export default Profile