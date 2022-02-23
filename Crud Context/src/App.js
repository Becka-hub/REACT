import React from 'react';
import EmployerList from './components/EmployerList';
import EmployeContextProvider from './contextes/EmployeeContext';
import './App.css'
const App = () => {

  return (
    <div className="container">
      <EmployeContextProvider>
        <EmployerList />
      </EmployeContextProvider>
    </div>
  );
}
export default App;