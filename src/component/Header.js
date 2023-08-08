import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <header className="header border-5 border-bottom mb-1">
      <img
        src="/images/Group%20117.png"
        className="h-auto pt-4 mx-auto d-none d-md-flex"
        alt="top rectangle"
      />
      <Navbar className="relative Navbar w-100" expand="md">
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="d-flex justify-content-between ps-3 ps-md-0 align-items-md-center mx-md-auto">
            <Nav.Link className="nav-link" href="#">Nav1</Nav.Link>
            <Nav.Link className="nav-link" href="#">Nav2</Nav.Link>
            <NavDropdown title="Nav3" id="nav-dropdown-1">
              <NavDropdown.Item href="https://yogeshmalikportfolio.netlify.app/">
                Made by YSM - Resume
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/ysmworking/">
                Linkedin
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Nav4" id="nav-dropdown-2">
              <NavDropdown.Item href="https://github.com/Yogeshmalik">
                Yogesh's Github
              </NavDropdown.Item>
              <NavDropdown.Item href="https://medium.com/@ballerbytes">
                Yogesh's Blog
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="nav-link" href="#">Nav5</Nav.Link>
            <Nav.Link className="nav-link" href="#">Nav6</Nav.Link>
            <Nav.Link className="nav-link" href="#">Nav7</Nav.Link>
            <Nav.Link className="nav-link" href="#">Nav8</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
