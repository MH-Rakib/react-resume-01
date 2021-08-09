import React from "react";
import { Navbar, Nav, Button, FormControl, Form } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeIcon from "@material-ui/icons/Home";
import data from "../../Assets/Images/ResumeData";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Header.css";
import CustomButton from "../Button/CustomButton";

const Header = () => {
  let location = useLocation();
  return (
    <div className=" header container_shadow">
      <Navbar expand="lg">
        <Navbar.Brand as={Link} to={"/About"}>
          <div className="home_menu">
            <HomeIcon className="home" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              as={Link}
              to={"/Resume"}
              className={
                location.pathname == "/Resume"
                  ? "header_menu_active"
                  : "header_menu"
              }
            >
              Resume
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/Portfolio"}
              className={
                location.pathname == "/Portfolio"
                  ? "header_menu_active"
                  : "header_menu"
              }
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/Contact"}
              className={
                location.pathname == "/Contact"
                  ? "header_menu_active"
                  : "header_menu"
              }
            >
              Contact
            </Nav.Link>
          </Nav>
          <div className="socials">
            {Object.keys(data.socials).map((social) => (
              <a className="social_icons" href={data.socials[social].url}>
                {data.socials[social].icon}
              </a>
            ))}
          </div>
          <CustomButton
            text={"Hire me"}
            icon={<AccountCircleIcon style={{ color: "#fff" }} />}
          ></CustomButton>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
