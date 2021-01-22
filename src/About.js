import React from "react";
import { Element } from "react-scroll";
import { Row, Col } from "react-bootstrap";
import "./About.css";

const About = (props) => (
  <Element className="section" name="about">
    <h4 className="text-center light underlined">ABOUT</h4>
    <Row>
      <Col xs={{ span: 10, offset: 1 }}>
        <span className="text-write-up font-2 thin default">
          {props.info.about}
        </span>
      </Col>
    </Row>
  </Element>
);

export default About;
