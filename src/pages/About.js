import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function About(){
  return(
    <Container className="container">
    <Row>
      <Col xs={12}>
        <h1>ABOUT PAGE</h1>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <p>3rd Year Computer Science Student in University of Cabuyao</p>
      </Col>
    </Row>
  </Container>
  );
}

export default About;
