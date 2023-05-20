import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

import logo from "../../assets/app-logo.png";

export const Header = () => {
  return (
    <header className="Header">
      <img src={logo} className="Logo" alt="logo" />

      <nav className="Nav">
        <Link to="/">Home</Link>
        <Link to="/profile">Not Ekle</Link>
        <Link to="/about">About</Link>
        <button>Logout</button>
      </nav>
    </header>
  );
};
