import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import react from "react"

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// this
import "bootstrap/dist/css/bootstrap.min.css.map";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Components/Navbar";
import RefForm from "./Components/refForm";

function App() {
  return (
    <Router>
      <Navbar
        title="Refrence Form"
        // searchBar={true}
      />
      {/* <RefForm /> */}
      <Routes>
      <Route path="/" element={<RefForm />} />
        {/* <Route path="/" element={<refForm />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
