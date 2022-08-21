import React from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import '../Css/contact.css';

const Contact = () => {
  let location = useLocation();
  function renderCalendar(info){
   return(
    <div className='Liste'>
      <h2>{info.event.title}</h2>
    </div>
   )
  }
  return (
    <div>
      <Helmet>
        <title>Contact</title>
        <meta name='description' content='Contact.' />
        <link rel='canonical' href={location.pathname} />
      </Helmet>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        headerToolbar={{
          left:'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay'
        }}
        eventContent={renderCalendar}
        events={[
          { title: 'Danse', date: '2022-07-01' ,backgroundColor:'yellow',borderColor: 'white'},
          { title: 'Sport', date: '2022-07-02' }
        ]}
        eventClick = { ( info ) => {
          alert(info.event.title);
        } }
        // eventMouseEnter = { ( info ) => {
        //   alert(info.event.title);
        // } }
        locale='fr'
      />

    </div>
  )
}

export default Contact