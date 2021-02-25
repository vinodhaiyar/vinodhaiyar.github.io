import React from "react";
import { Element } from "react-scroll";
import { Row, Col, Image, Button } from "react-bootstrap";

import "./Home.css";

const Home = (props) => (
  <Element className="section" name="home">
    <Row>
      <Col sm={6} xs={12}>
        <Row>
          <Col sm={{ span: 4, offset: 4 }} xs={{ span: 8, offset: 2 }}>
            <Image
              src={props.info.avatar}
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
                <span className="bold">{props.info.name}</span>
              </h3>
              <h6 className="bold light">{props.info.designation}</h6>
            </div>
          </Col>
        </Row>
      </Col>
      <Col sm={{ span: 6, offset: 0 }} xs={{ span: 11, offset: 1 }}>
        <span className="d-block mt-5 pt-3 text-write-up thin font-2 dark">
          {props.info.summary}
        </span>
        <Row className="mt-5">
          <Col xs={12}>
            <Button variant="outline-primary" href={props.info.linkedin} target="_blank" rel="noopener noreferrer" size="md" className="social-link"><i className="fa fa-linkedin"></i></Button>
            <Button variant="outline-secondary" href={`mailto:${props.info.email}`} size="md" className="social-link"><i className="fa fa-envelope"></i></Button>
          </Col>
        </Row>
      </Col>
    </Row>
  </Element>
);

export default Home;
