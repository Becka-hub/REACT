import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard';
const App = () => {
  const [navbarState, setNavbarState] = useState(false);
  return (
    <Div>
      <Sidebar
        navbarState={navbarState}
        setNavbarState={setNavbarState}
      />
      <Dashboard
        navbarState={navbarState}
        setNavbarState={setNavbarState}
      />
    </Div>
  );
}

export default App;
const Div = styled.div`
background-color:black;
`;