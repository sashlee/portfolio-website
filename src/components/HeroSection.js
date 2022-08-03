import React, { useContext } from "react";
import { Container, Col } from "react-bootstrap";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { ThemeContext } from "../store/themeContext";

const HeroSection = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);
  return (
    <Container fluid className="p-0">
      <Col>
        <div className={theme ? "hero-container" : "light-hero-container"}>
          <div className="hero-content">
            <span className="fs-4">
              Hi there! <span className="wave">👋</span>
            </span>
            <Col className="d-flex">
              <div className="d-flex flex-column align-items-center justify-content-center">
                <span>
                  <FaTwitter />
                </span>
                <span>
                  <FaLinkedinIn />
                </span>
                <span>
                  <FaGithub />
                </span>
              </div>
              <div className=" ms-4 hero-text">
                <h1>
                  I am <b className={theme ? "gray" : "gold"}>Sarah</b> Obasi a
                  Software Engineer.
                </h1>
              </div>
            </Col>
          </div>
        </div>
      </Col>
    </Container>
  );
};

export default HeroSection;
