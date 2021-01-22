import React from "react";
import { Element } from "react-scroll";
import { Row, Col, Image } from "react-bootstrap";

import "./Home.css";
import avatar from "./images/avatar.jpg";

const Home = () => (
  <Element className="section" name="home">
    <Row>
      <Col sm={6} xs={12}>
        <Row>
          <Col sm={{ span: 4, offset: 4 }} xs={{ span: 8, offset: 2 }}>
            <Image
              src={avatar}
              className="avatar d-block"
              fluid
              roundedCircle={true}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="text-center mt-4">
              <h3 className="thin default">
                <span className="bold">VINODH</span> KUMAR
              </h3>
              <h6 className="bold light">LEASING MANAGER @ INDOSPACE</h6>
            </div>
          </Col>
        </Row>
      </Col>
      <Col sm={{ span: 6, offset: 0 }} xs={{ span: 11, offset: 1 }}>
        <span className="d-block mt-5 pt-3 text-write-up thin font-2 dark">
          A Business Development Professional having 10+ years of experience.
          Currently working with IndoSpace as Leasing Manager for Sri City
          project.
        </span>
      </Col>
    </Row>
  </Element>
);

export default Home;
