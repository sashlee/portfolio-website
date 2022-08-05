import React, { useContext } from "react";
import { Container, Col, Image } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { ThemeContext } from "../store/themeContext";

const Experience = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);
  return (
    <Container fluid className={theme ? "bg-dark" : "bg-light"}>
      <div
        style={{
          textAlign: "left",
          paddingBottom: "20px",
          paddingTop: "20px",
          paddingLeft: "40px",
          color: "#777",
        }}
      >
        <h4>Work Experience</h4>
      </div>
      <Col className="work-container">
        <div className="accordion-container">
          <Accordion
            defaultActiveKey={["0"]}
            alwaysOpen
            className={theme ? "accordion" : "light-accordion"}
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Frontend Developer, Nativebrands
              </Accordion.Header>
              <Accordion.Body>
                <h4>Description</h4>
                <ul>
                  <li>
                    {" "}
                    Worked on the implementation of Academier (an e-learning
                    platform) as a frontend developer using basic HTML5, CSS3
                    and JavaScript.
                  </li>
                  <li>
                    {" "}
                    Worked on the UI design for Damierspaces with a team of
                    other developers.
                  </li>
                  <li>
                    {" "}
                    Spearheaded the design process and implementation of various
                    WordPress projects
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Frontend Developer, Sendbox NG
              </Accordion.Header>
              <Accordion.Body>
                <h4>Description</h4>
                <ul>
                  <li>
                    {" "}
                    Worked on the implementation of Academier (an e-learning
                    platform) as a frontend developer using basic HTML5, CSS3
                    and JavaScript.
                  </li>
                  <li>
                    {" "}
                    Worked on the UI design for Damierspaces with a team of
                    other developers.
                  </li>
                  <li>
                    {" "}
                    Spearheaded the design process and implementation of various
                    WordPress projects
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Software Engineer, Freelance</Accordion.Header>
              <Accordion.Body>
                <h4>Description</h4>
                <ul>
                  <li>
                    {" "}
                    Worked on the implementation of Academier (an e-learning
                    platform) as a frontend developer using basic HTML5, CSS3
                    and JavaScript.
                  </li>
                  <li>
                    {" "}
                    Worked on the UI design for Damierspaces with a team of
                    other developers.
                  </li>
                  <li>
                    {" "}
                    Spearheaded the design process and implementation of various
                    WordPress projects
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="work-image"></div>
      </Col>
    </Container>
  );
};

export default Experience;
