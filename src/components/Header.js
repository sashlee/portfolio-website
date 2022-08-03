import React, { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { IoIosSquare } from "react-icons/io";
import { ThemeContext } from "../store/themeContext";

const Header = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);
  // const [show, setShow] = useState(true);

  // const darkMode = () => {
  //   setShow(!show);
  //   console.log("clicked");
  // };
  // useEffect(() => {
  //   localStorage.setItem("toogle", JSON.stringify(show));
  // }, [show]);

  return (
    <Navbar bg={theme ? "dark" : "light"} variant={theme ? "dark" : "light"}>
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ fontWeight: "600", fontSize: "28px" }}
        >
          Sarah <IoIosSquare color="#777" size={20} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text onClick={toggleTheme}>
            {theme ? <FaToggleOn size={35} /> : <FaToggleOff size={35} />}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <div>
    //   <h1>Header</h1>
    // </div>
  );
};

export default Header;
