import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Components/Routes';
import NavBar from './Components/NavBar';
const App = () => {

  return (
    <div>
      <Router>
        <NavBar/>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
