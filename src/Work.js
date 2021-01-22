import React from "react";
import { Element } from "react-scroll";
import { Row, Col, Image } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "./Work.css";

class Work extends React.Component {
  render() {
    const verticalTimelineElement = (e) => (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "white",
          color: "#606060"
        }}
        contentArrowStyle={{
          borderRight: "7px solid transparent"
        }}
        date={e.date}
        iconStyle={{ background: "white", color: "#606060" }}
        icon={<Image src={e.icon} fluid roundedCircle={true} />}
      >
        <h4 className="vertical-timeline-element-title">{e.title}</h4>
        <h6 className="vertical-timeline-element-subtitle bold">
          {e.subtitle}
        </h6>
        <p className="font-2 thin default text-write-up">{e.description}</p>
      </VerticalTimelineElement>
    );
    return (
      <Element className="section" name="work">
        <Row>
          <Col xs={12}>
            <h4 className="underlined text-center">MY WORK</h4>
            <VerticalTimeline className="mt-5">
              {this.props.info.work.map(verticalTimelineElement)}
            </VerticalTimeline>
          </Col>
        </Row>
      </Element>
    );
  }
}

export default Work;
