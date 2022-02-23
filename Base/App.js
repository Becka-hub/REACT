import React, { Component } from 'react';
import Header from './composants/Header';
import Text from './composants/Text';
import './App.css';

class App extends Component {

  state = {
    presentation: [
      {
        id: 1,
        nom: 'McDonald',
        prenom: 'Josh',
        age: 20
      },
      {
        id: 2,
        nom: 'Durant',
        prenom: 'Paul',
        age: 35
      },
      {
        id: 3,
        nom: 'Smith',
        prenom: 'Steve',
        age: 10
      },
    ],
    prenom: 'Tom'
  }
  ragenir = () => {
    const nVstate = this.state.presentation.map((utilisateur) => {
      utilisateur.age = 5
      return utilisateur.age;
    }
    );
    this.setState({
      nVstate
    });
  }
  render() {
    // const name="Tome";
    // const element=<p>Lorem ipsum dolor sit amet</p>

    // setTimeout(() => {
    //   this.setState(
    //     {
    //       prenom: "Beckas"
    //     }
    //   );
    // }, 3000);

    return (
      <div className="App">
        {/* <h1>Notre composent</h1> */}
        {/* {name} */}
        {/* <h4>1 +1 = {1 + 1}</h4> */}
        {/* {element} */}

        {/* <center><Test nom={this.state.prenom}/></center> */}
        <center><Header nom={this.state.presentation} prenom={this.state.prenom} /></center>
        <center><button onClick={this.ragenir}>Ragenir</button></center>
        <Text titre="Mon Titre"/>
      </div>
    );
  }
}
export default App;
