import React from "react";
import { Element } from "react-scroll";
import { Row, Col, Image } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import indospace from "./images/indospace.png";
import gmr from "./images/gmr.png";
import grt from "./images/grt.png";
import srei from "./images/srei.png";
import sricity from "./images/sricity.png";
import "./Work.css";

class Work extends React.Component {
  workTimeline = [
    {
      title: "INDOSPACE",
      subtitle: "Leasing Manager",
      date: "2018 - PRESENT",
      icon: indospace,
      description:
        "Developing Pipeline. Sourced 3.5 lacs sft of space. In final discussions."
    },
    {
      title: "SREI",
      subtitle: "Senior Manager - Business Development",
      date: "2016 - 2018",
      icon: srei,
      description:
        "Closed 4 deals – Nissi (1.27 acres), Shine Cables (1.66 acres) in SEZ and Color Sports (2500 sft) and an oil presser company (2500 sft) in FTWZ."
    },
    {
      title: "GMR",
      subtitle: "Manager - Business Development",
      date: "2014 - 2016",
      icon: gmr,
      description: ""
    },
    {
      title: "Sri City",
      subtitle: "Manager - Business Development",
      date: "2010 - 2014",
      icon: sricity,
      description:
        "Closed deals with Cadbury (134 acres), Unicharm (42 acres), NHK Spring (5 acres), Bergen Pipes (5 acres) and Eagle Burgmann (10 acres)."
    },
    {
      title: "GRT Hotels & Resorts",
      subtitle: "Deputy Sales Manager",
      date: "2005 - 2010",
      icon: grt,
      description:
        "Handled 350 accounts. Feasibility study for GRT Kanchi by assessing potential from Sriperumbudur belt."
    }
  ];
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
              {this.workTimeline.map(verticalTimelineElement)}
            </VerticalTimeline>
          </Col>
        </Row>
      </Element>
    );
  }
}

export default Work;
