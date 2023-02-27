import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
        </div>
      </nav>
    </div>
  );
}
// see line no. 5 navbar props defined
// or object ke bad semi colon nhi use karte hai
Navbar.propTypes = {
  title: PropTypes.string
};
Navbar.defaultProps = {
  title: "set title here"
};