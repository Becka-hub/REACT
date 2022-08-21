import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link , Outlet} from 'react-router-dom';
const Fournisseur = () => {
  return (
    <>
      <h1 className='text-center'>Fournisseur</h1>
      <Nav>
        <Nav.Item>
          <Nav.Link to="/fournisseur/presentation" as={Link} title="Presentation fournisseur">Presentation</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/fournisseur/Service" as={Link}  title="Service fournisseur">Service</Nav.Link>
        </Nav.Item>
      </Nav>
      <Outlet/>
    </>
  )
}

export default Fournisseur