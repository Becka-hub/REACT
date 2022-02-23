import React, { Component } from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import image1 from '../images/card3.png';
import image2 from '../images/card4.png';
import image3 from '../images/card5.png';
import image4 from '../images/card9.png';
import image5 from '../images/card10.png';
import image6 from '../images/card11.png';
import './Cards.css';
class Cards extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={12} sm={6} md={3} lg={3}>
                        <Card>
                            <div className="card-img">
                                <Card.Img variant="top" src={image1} />
                            </div>
                            <Card.Body>
                                <Card.Title className="text-center">Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3} lg={3}>
                        <Card>
                            <div className="card-img">
                                <Card.Img variant="top" src={image2} />
                            </div>
                            <Card.Body>
                                <Card.Title className="text-center">Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3} lg={3}>
                        <Card>
                            <div className="card-img">
                                <Card.Img variant="top" src={image3} />
                            </div>
                            <Card.Body>
                                <Card.Title className="text-center">Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3} lg={3}>
                        <Card>
                            <div className="card-img">
                                <Card.Img variant="top" src={image4} />
                            </div>
                            <Card.Body>
                                <Card.Title className="text-center">Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3} lg={3}>
                        <Card>
                            <div className="card-img">
                                <Card.Img variant="top" src={image5} />
                            </div>
                            <Card.Body>
                                <Card.Title className="text-center">Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3} lg={3}>
                        <Card>
                            <div className="card-img">
                                <Card.Img variant="top" src={image6} />
                            </div>
                            <Card.Body>
                                <Card.Title className="text-center">Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Cards;