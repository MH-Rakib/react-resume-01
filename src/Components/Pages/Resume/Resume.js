import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Resume.css";
import CustomTimeline from "../../CustomTimeline/CustomTimeline";
import data from "../../../Assets/Images/ResumeData";

const Resume = () => {
  const { education, experience, clients, testimonials } = data;
  return (
    <div className="container_shadow resume_page">
      {/* timeline */}
      <Container className="resume_timeline_block content_block">
        <Row>
          <Col item xs={12} sm={12} md={12} lg={6} xl={6}>
            <h2 className="content_header">Education</h2>
            <CustomTimeline info={education}></CustomTimeline>
          </Col>
          <Col item xs={12} sm={12} md={12} lg={6} xl={6}>
            <h2 className="content_header">Experiences</h2>
            <CustomTimeline info={experience}></CustomTimeline>
          </Col>
        </Row>
      </Container>

      {/* clients */}
      <Container className="clients content_block">
        <h2 className="content_header">Clients</h2>
        <Row>
          {clients.map((client) => (
            <Col item xs={12} sm={6} md={6} lg={3} xl={3}>
              <div className="client_image">
                <img className="w-100" src={client} alt="" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* service */}
      <Container className="testimonials content_block">
        <h2 className="content_header">testimonials</h2>
        <Row>
          {testimonials.map((testimonial) => (
            <Col item xs={12} sm={12} md={12} lg={6} xl={4}>
              <div className="testimonial">
                <div className="testimonial_header">
                  <div className="user_image">
                    <img src={testimonial.image} alt="" />
                  </div>

                  <div className="user_info">
                    <h2>{testimonial.name}</h2>
                    <p>{testimonial.designation}</p>
                  </div>
                </div>

                <div className="testimonial_content">
                  <p>{testimonial.comment}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
