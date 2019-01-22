import React from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="nav navbar navbar-expand-lg navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {branding}
        </Link>
        <div>
          <ul className="navbar-bar mr-auto">
            <li className="nav- item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home">Home</i>
              </Link>
            </li>
            <li className="nav- item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus">Add</i>
              </Link>
            </li>
            <li className="nav- item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question">About</i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProp = {
  branding: "My App"
};

Header.propType = {
  branding: PropType.string.isRequired
};

export default Header;
