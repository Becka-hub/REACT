import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Societe from './Page/Societe/Societe';
import Client from './Page/Client/Client';
import Profile from './Page/Client/Profile';
import Reservation from './Page/Client/Reservation';
import Fournisseur from './Page/Fournisseur/Fournisseur';
import Presentation from './Page/Fournisseur/Presentation';
import Service from './Page/Fournisseur/Service';
import NavBar from './Component/NavBar';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/societe/:id' element={<Societe />} />
        <Route path='/client' element={<Client />}>
          <Route path='/client/profile' element={<Profile />} />
          <Route path='/client/reservation' element={<Reservation />} />
        </Route>
        <Route path='/fournisseur' element={<Fournisseur />}>
          <Route path='/fournisseur/presentation' element={<Presentation />} />
          <Route path='/fournisseur/service' element={<Service />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App 
