import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import '../Stylesheets/HomeStyles.css'

const NavHeader = () => {
  return (
      <Container fluid className="p-0">
        <Navbar  className="main-nav" data-bs-theme="dark">
          <Container >
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Container>
  );
};

export default NavHeader;
