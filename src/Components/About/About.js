// import { Container, Grid } from "@material-ui/core";
import React from "react";
import data from "../../Assets/Images/ResumeData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

const About = () => {
  return (
    <div className=" about_page container_shadow">
      {/* About me */}
      <Container className="about content_block">
        <Row>
          <Col item>
            <h2 className="content_header">About Me</h2>
            <p>{data.about}</p>
          </Col>
        </Row>
      </Container>

      {/* service */}
      <Container className="services content_block">
        <h2 className="content_header">My Services</h2>
        <Row>
          {Object.keys(data.services).map((service) => (
            <Col item xs={12} sm={12} md={6} lg={6} xl={3}>
              <div className="service">
                <span className="service_icon">
                  {data.services[service].icon}
                </span>
                <p className="service_title">{data.services[service].title}</p>
                <p className="service_content">
                  {data.services[service].content}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Skills */}
      <Container className="skills content_block">
        <h2 className="content_header">My Skills</h2>
        <Row>
          <Col item xs={12} sm={12} md={12} lg={6} xl={6}>
            {Object.keys(data.skills1).map((skill) => (
              <div className="skillBar">
                <span className="skillBar_header">{skill}</span>
                <ProgressBar
                  now={data.skills1[skill]}
                  label={`${data.skills1[skill]}%`}
                />
              </div>
            ))}
          </Col>
          <Col item xs={12} sm={12} md={12} lg={6} xl={6}>
            {Object.keys(data.skills2).map((skill) => (
              <div className="skillBar">
                <span className="skillBar_header">{skill}</span>
                <ProgressBar
                  now={data.skills2[skill]}
                  label={`${data.skills2[skill]}%`}
                />
              </div>
            ))}
          </Col>
        </Row>
        <div></div>
      </Container>
    </div>
  );
};

export default About;
