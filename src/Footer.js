import React from "react";
import { Element } from "react-scroll";
import { Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = (props) => (
  <Element className="section" name="footer">
    <Row>
      <Col sm={{ span: 4, offset: 4 }}>
        <Row>
          <Col xs={3}></Col>
          <Col xs={3}>
            <a href={props.info.linkedin} target="_blank">
              <i class="fa fa-linkedin"></i>
            </a>
          </Col>
          <Col xs={3}>
            <a href={`mailto:${props.info.email}`}>
              <i class="fa fa-envelope"></i>
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  </Element>
);

export default Footer;
