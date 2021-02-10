import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";
import "./TopNav.css";

const TopNav = (props) => (
  <Navbar expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
      <Nav>
        <Link
          className="nav-link"
          to="home"
          smooth={true}
          duration={250}
          delay={250}
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
        >
          SKILLSET
        </Link>
        <Link
          className="nav-link"
          to="work"
          spy={true}
          smooth={true}
          duration={250}
          delay={250}
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
