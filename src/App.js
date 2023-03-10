import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css.map";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/NoteState"
// BsArrowUpCircleFill bs use in react-icons/bs

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar
            title="INoteBook"
            about="About"
            home="Home"
            searchBar={false}
          />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
