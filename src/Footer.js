import React from "react";
import { Element } from "react-scroll";
import { Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => (
  <Element className="section" name="footer">
    <Row>
      <Col sm={{ span: 4, offset: 4 }}>
        <Row>
          <Col xs={3}></Col>
          <Col xs={3}>
            <a href="https://www.linkedin.com/in/vinodh-v-indospace/" target="_blank">
              <i class="fa fa-linkedin"></i>
            </a>
          </Col>
          <Col xs={3}>
            <a href="mailto:vvinodh.job@gmail.com">
              <i class="fa fa-envelope"></i>
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  </Element>
);

export default Footer;
