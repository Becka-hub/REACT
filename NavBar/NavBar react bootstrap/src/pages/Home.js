import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
class Home extends Component {
  render() {

    return (
      <div>
      <h1>Home</h1>
      {/* <Button as={Link} to="/about" variant="outline-danger">About</Button> */}
      </div>
    );
  }
}
export default Home;
