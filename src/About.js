import React from "react";
import { Element } from "react-scroll";
import { Row, Col } from "react-bootstrap";
import "./About.css";

const About = () => (
  <Element className="section" name="about">
    <h4 className="text-center light underlined">ABOUT</h4>
    <Row>
      <Col xs={{ span: 10, offset: 1 }}>
        <span className="text-write-up font-2 thin default">
          A BD Professional having 10+ years of ‘B2B Business Development’.
          Investment promotion, industry development, cross-border trade,
          transaction advisory, building strategic relationships and client
          acquisitions. New Industrial Cities/Industrial Clusters/Warehousing
          promotion. Domain expertise in Channel Development, Business
          Development, Investment promotion, Research, and Networking. Currently
          working with IndoSpace as Leasing Manager for Sri City project.
        </span>
      </Col>
    </Row>
  </Element>
);

export default About;
