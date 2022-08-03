import React, { useContext } from "react";
import { Container, Col } from "react-bootstrap";
import { ThemeContext } from "../store/themeContext";

const Footer = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);
  return (
    <Container fluid className="p-0">
      <Col className={theme ? "footer-container" : "light-footer-container"}>
        <div>
          <p className={theme ? "note" : "light-note"}>
            Want to talk software development?
          </p>
          <p>sarahrichie08@gmail.com</p>
        </div>
        <div className={theme ? "note" : "light-note"}>
          Website designed and coded by yours truly.
        </div>
      </Col>
    </Container>
  );
};

export default Footer;
