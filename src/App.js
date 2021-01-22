import React from "react";
import { Container } from "react-bootstrap";

import TopNav from "./TopNav";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Footer from "./Footer";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <TopNav />
      <Container fluid>
        <Home />
        <About />
        <Work />
        <Footer />
      </Container>
    </div>
  );
}
