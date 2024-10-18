import React from 'react';
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <Container className="container">
      <Row>
        <Col xs={12}>
          <h1>WELCOME TO MY HOME PAGE</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <p>My goal is to stay alive no matter what</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;