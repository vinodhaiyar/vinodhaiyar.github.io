import React from "react";
import { Element } from "react-scroll";
import { Row, Col } from "react-bootstrap";
import "./About.css";

const About = (props) => (
  <Element className="section" name="about">
    <h4 className="text-center light underlined">SKILLSET</h4>
    <Row>
      <Col xs={{ span: 10, offset: 1 }}>
	<ul>
	  {props.info.skillset.map((skill) => <li className="text-write-up font-2 thin default">{skill}</li>)}
	</ul>
      </Col>
    </Row>
  </Element>
);

export default About;
