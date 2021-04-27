import React from 'react';
import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <BrowserRouter>
            <Navbar bg="success" variant="dark" className="mb-5" expand={'lg'}>
              <Navbar.Brand>Velkommen til test</Navbar.Brand>
              <Nav>
              <Nav.Link as={Link} to="/">Hjem</Nav.Link>
              <Nav.Link as={Link} to="/allgames">Alle test</Nav.Link>
              <Nav.Link as={Link} to="/allcharacters">Kontakt test</Nav.Link>
              <Nav.Link as={Link} to="/allconsoles">Om test</Nav.Link>
               
            </Nav>
          </Navbar>  

          </BrowserRouter>
        
    );

}

export default NavBar;