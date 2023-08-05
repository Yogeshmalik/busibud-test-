import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <div>
      <header class="header border-5 border-bottom mb-1">
        <img
          src="/images/Group%20117.png"
          className=" h-auto pt-4 mx-auto d-flex"
          alt="top rectangle"
        />
        <Navbar className="relative">
          <Nav className="d-flex justify-content-between w-75 align-items-center mx-auto">
            <Nav.Link href="#">Nav1</Nav.Link>
            <Nav.Link href="#">Nav2</Nav.Link>
            <NavDropdown title="Nav3" id="nav-dropdown">
              <NavDropdown.Item href="#">Dropdown Item 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Dropdown Item 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Nav4" id="nav-dropdown">
              <NavDropdown.Item href="#">Dropdown Item 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Dropdown Item 2</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Nav5</Nav.Link>
            <Nav.Link href="#">Nav6</Nav.Link>
            <Nav.Link href="#">Nav7</Nav.Link>
            <Nav.Link href="#">Nav8</Nav.Link>
          </Nav>
        </Navbar>
        {/* <nav className="relative ">
          <ul className="d-flex justify-content-between w-75 align-items-center mx-auto list-unstyled">
            <li className="">Nav1</li>
            <li>Nav2</li>
            <li className=" dropdown">Nav3</li>
            <li>Nav4</li>
            <li>Nav5</li>
            <li>Nav6</li>
            <li>Nav7</li>
            <li>Nav8</li>
          </ul>
        </nav> */}
      </header>
    </div>
  );
}

export default Header;
