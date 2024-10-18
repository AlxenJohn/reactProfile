import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Skills.css'; 

function Skills() {
    return (
        <Container>
            <Row>
                <Col>
                    <h2 className="skills-heading">MY SKILLS</h2>
                    <ul className="skills-list">
                        <li>JavaScript</li>
                        <li>Java Swing</li>
                        <li>Java</li>
                        <li>React</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Skills;