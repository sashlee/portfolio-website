import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "react-scroll-to-top";
import Home from "./pages/Home";
import { ThemeProvider } from "./store/themeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ScrollToTop smooth color="primary" />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
