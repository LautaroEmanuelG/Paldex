import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <Link
        className="header__logo"
        style={{ textDecoration: "none", color: "#fff" }}
        to="/"
      >
        <span>Paldex</span>
      </Link>
      <nav className="header__nav">
        <Link
          className={`header__nav-btn ${
            location.pathname === "/" ? "selectedButton" : ""
          }`}
          style={{ textDecoration: "none", color: "#fff" }}
          to="/"
        >
          <span>List</span>
        </Link>
        <Link
          className={`header__nav-btn ${
            location.pathname === "/drops" ? "selectedButton" : ""
          }`}
          style={{ textDecoration: "none", color: "#fff" }}
          to="/drops"
        >
          <span>Drops</span>
        </Link>
      </nav>
    </header>
  );
};
