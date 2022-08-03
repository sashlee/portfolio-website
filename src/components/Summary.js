import React, { useContext } from "react";
import { Container, Col, Image } from "react-bootstrap";
import summary from "../images/summary.webp";
import { ThemeContext } from "../store/themeContext";
const Summary = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);
  return (
    <Container fluid className={theme ? "bg-dark" : "bg-light"}>
      <Col className="summary-container">
        <div className="image-container">
          <Image src={summary} className="summary-image" />
        </div>
        <div className="summary-content">
          <h3>Brief Description</h3>
          <span>
            A dedicated software developer with over 4 years of experience,
            developing software with high standards and interacting with
            multiple stakeholders from technical and non-technical backgrounds;
            ensuring clarity, quality, and continuous delivery at all times.
          </span>
          <br />
          <br />
          <span>
            I have a Bachelor's Degree in Computer Science and work mostly with
            front-end technologies such as Gatsby, React, JavaScript, Angular,
            Next and CSS. Over the course of software development, I have also
            worked with the following technologies - PostgreSQL, mySQL,
            React-Native, MongoDB, Github and Node. I am a self-starter with a
            proven ability to leverage multiple technologies to build
            interactive and innovative applications.
          </span>
        </div>
      </Col>
    </Container>
  );
};

export default Summary;
