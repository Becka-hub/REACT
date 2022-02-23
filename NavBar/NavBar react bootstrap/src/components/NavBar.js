import React, { Component } from 'react';
import { Navbar, Container, Nav ,Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
class NavBar extends Component {

    render() {

        return (
            <div className="App">
                <Navbar bg="primary" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to={"/"}>GO Voiture</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse>
                            <Nav className="ms-auto text-center my-2 my-lg-0">
                                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                                <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                                <Button variant="light">Login</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
export default NavBar;