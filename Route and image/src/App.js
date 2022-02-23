import React, { Component } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from './composants/NavBar';
import './App.css';
class App extends Component {
  render() {

    return (
      <div classNam="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/Contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
