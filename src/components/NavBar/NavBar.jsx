import React, { useState, useCallback, useEffect } from "react";
import {
  Container, Nav, Navbar
} from "react-bootstrap";
import Icon from "assets/icons/icon.jpeg";
import { HiddenNavbar, NormalNav } from "./NavBar.styles";

const NavBar = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;

      if (window.scrollY > 20) {
        setIsHidden(false);
      } else {
        setIsHidden(true);
      }
    }, []
  );
  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <Navbar as={isHidden ? HiddenNavbar : NormalNav} collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home"><img src={Icon} alt="icon" width="200" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">SOBRE A BSI</Nav.Link>
            <Nav.Link href="#advice">ASSESSORIA</Nav.Link>
            <Nav.Link href="#enterprises">EMPRESAS</Nav.Link>
            <Nav.Link href="#investments">INVESTIMENTOS</Nav.Link>
            <Nav.Link href="#contact">CONTATO</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              ABRA SUA CONTA
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
