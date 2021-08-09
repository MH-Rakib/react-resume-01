import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../../../Assets/Images/ResumeData";
import portfolioData from "../../../Assets/Images/portfolioData";
import "./Portfolio.css";

const Portfolio = () => {
  const { portfolioCategories } = data;
  const [currentCategory, setCurrentCategory] = useState("project");

  const [currentCategoryData, setCurrentCategoryData] = useState([]);

  useEffect(() => {
    const fetchData = portfolioData.filter(
      (category) => category.category == currentCategory
    );
    setCurrentCategoryData(fetchData);
  }, [currentCategory]);

  console.log(currentCategory);
  console.log(currentCategoryData.data);

  const handleCategories = (name) => {
    setCurrentCategory(name);
  };
  return (
    <div className="container_shadow">
      {/* portfolio page */}
      <Container className=" content_block">
        <Row>
          <Col item>
            <h2 className="content_header">Portfolio</h2>
          </Col>
        </Row>
        <Row>
          <Col item>
            <div className="categories">
              <ul>
                {portfolioCategories.map((category) => (
                  <li
                    key={category.name}
                    onClick={() => handleCategories(category.value)}
                    name={category.value}
                    className={
                      category.value == currentCategory
                        ? "active_category"
                        : "rest_category"
                    }
                  >
                    {category.name}
                    {/* {console.log(category.value)} */}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Portfolio data*/}
      <Container className="portfolio">
        <Row>
          {currentCategoryData.map((data) => (
            <Col item xs={12} sm={12} md={12} lg={6} xl={4}>
              <div className="portfolio_card">
                <div className="portfolio_image">
                  <img src={data.image} alt="" />
                </div>
                <div className="portfolio_content">
                  <p className="portfolio_content_title">{data.title}</p>
                  <p className="portfolio_content_description">
                    {data.description}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
