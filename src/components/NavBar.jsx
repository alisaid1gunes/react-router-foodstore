import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/js/src/collapse.js";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar(props) {
  const linkItems = props.links
    .filter((item) => item.isLink)
    .map((item, index) => (
      <li key={index}>
        <Link to={item.link} className="nav-link">
          {item.title}
        </Link>
      </li>
    ));
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger sticky-top  ">
      <Link to="/" className="navbar-brand">
        Foodstore
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav">{linkItems}</div>
      </div>
    </nav>
  );
}
export default NavBar;
