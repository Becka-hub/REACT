import React, { Component } from 'react';
import './App.css';
import Contacts from './composants/Contacts';
import Header from './composants/Header';
class App extends Component {

  render() {

    return (
      <div className="App">
        <Header/>
        <div className="container">
        <Contacts/>
        </div>
      </div>
    );
  }
}
export default App;
