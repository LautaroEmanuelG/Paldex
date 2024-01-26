import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
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
          className="header__nav-btn"
          style={{ textDecoration: "none", color: "#fff" }}
          to="/"
        >
          <span>List</span>
        </Link>
        <Link
          className="header__nav-btn"
          style={{ textDecoration: "none", color: "#fff" }}
          to="/alternative-form"
        >
          <span>Alternative Form</span>
        </Link>
        <Link
          className="header__nav-btn"
          style={{ textDecoration: "none", color: "#fff" }}
          to="/boss"
        >
          <span>Boss</span>
        </Link>
      </nav>
    </header>
  );
};
