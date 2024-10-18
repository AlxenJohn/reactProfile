import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from '../pages/Home'; 
import About from '../pages/About';
import Contact from '../pages/Contact';
import Skills from '../pages/Skills';
import './NavbarComp.css'
export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar className="custom-navbar" bg="dark" variant={"dark"} expand="lg" style={{ height: '80px' }}>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                <Nav.Link as={Link} to="/" className="custom-nav-link">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about" className="custom-nav-link">About</Nav.Link>
                                <Nav.Link as={Link} to="/contact" className="custom-nav-link">Contact</Nav.Link>
                                <Nav.Link as={Link} to="/skills" className="custom-nav-link">Skills</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/skills" element={<Skills />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}