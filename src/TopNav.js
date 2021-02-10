import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";
import "./TopNav.css";

const TopNav = (props) => (
  <Navbar expand="lg" sticky="top">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
      <Nav>
        <Link
          className="nav-link"
          to="home"
	  spy={true}
          smooth={true}
          duration={250}
          delay={250}
	  offset={-100}
        >
          HOME
        </Link>
        <Link
          className="nav-link"
          to="about"
          spy={true}
          smooth={true}
          duration={250}
          delay={250}
	  offset={-100}
        >
          SKILL SET
        </Link>
        <Link
          className="nav-link"
          to="work"
          spy={true}
          smooth={true}
          duration={250}
          delay={250}
	  offset={-100}
        >
          MY WORK
        </Link>
        <Link
          className="nav-link"
          to="footer"
          spy={true}
          smooth={true}
          duration={250}
          delay={250}
	  offset={-100}
        >
          CONTACT
        </Link>
        <Nav.Link href={props.info.resume} target="_blank">
          RESUME
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default TopNav;
