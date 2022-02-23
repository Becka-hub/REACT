import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './Components/Home';
import AddContact from './Components/AddContact';
import EditContact from './Components/EditContact';
import Navbar from './Components/Navbar';
const App = () => {

  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route path="/add" component={() => <AddContact />} />
        <Route path="/edit/:id" component={() => <EditContact />} />
      </Switch>
    </div>
  );
}

export default App;
