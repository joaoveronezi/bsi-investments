import React, { useState, useCallback, useEffect } from "react";
import {
  Container, Nav, Navbar
} from "react-bootstrap";
import Icon from "assets/icons/bsi-icon.svg";
import { HiddenNavbar, NormalNav, OpenYourAccountButton } from "./NavBar.styles";

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
            <Nav.Link eventKey={2} href="#link">
              <a href="https://cadastro.xpi.com.br/desktop/step/1?assessor=A73442" target="_blank" rel="noreferrer">
                <OpenYourAccountButton>
                  ABRA SUA CONTA
                </OpenYourAccountButton>
              </a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
