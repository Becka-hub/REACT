import React, { Component } from 'react';
import { Button, Container ,Row,Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Card from '../components/Cards';
class Home extends Component {
  render() {

    return (
      <div>
        <Container>
          <h1 className="text-center">Card Design</h1>
          <Card/>
        </Container>
      </div>
    );
  }
}
export default Home;
