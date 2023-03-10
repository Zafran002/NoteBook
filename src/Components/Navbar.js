import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <div className="row">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand mx-2" to="/">
            {props.title}
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2  mb-lg-0">
              {/* ms-auto */}
              <li className="nav-item">
                <Link
                  className={`nav-link mx-2 
                  ${location.pathname === "/" ? "active navbar-brand" : ""}`}
                  aria-current="page"
                  to="/"
                >
                  {props.home}
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link  mx-2  ${
                    location.pathname === "/about" ? "active navbar-brand" : ""
                  }`}
                  to="about"
                >
                  {props.about}
                </Link>
              </li>
            </ul>
            {/* props.search bar use in app.js as a props  */}
            {props.searchBar ? (
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-info" type="submit">
                  Search
                </button>
              </form>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
// see line no. 5 navbar props defined
// or object ke bad semi colon nhi use karte hai
Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  home: PropTypes.string,
};
Navbar.defaultProps = {
  title: "set title here",
  home: "Home",
  about: "About Us",
  searchBar: "true",
};
