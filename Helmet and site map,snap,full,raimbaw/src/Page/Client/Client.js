import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link, Outlet } from 'react-router-dom';
const Client = () => {
  return (
    <>
      <h1 className='text-center'>Client</h1>
      <div className='row'>
        <div className='col-4'>
          <Nav>
            <Nav.Item>
              <Nav.Link to="/client/profile" as={Link} title="profile client">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="/client/reservation" as={Link} title="reservation client">Reservation</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className='col-8'>
          
          <Outlet />
        </div>
      </div>


    </>
  )
}

export default Client