import React, { Component } from 'react';
import './App.css';
import FormInput from './FormInput';
class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="container">
          <FormInput />
        </div>
      </div>
    );
  }
}
export default App;
