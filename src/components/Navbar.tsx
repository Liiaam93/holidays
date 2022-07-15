import React from "react";
import Button from "./Button";
import "./styles.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1 className="nav-item">Holiday Finder</h1>
      <div className="nav-item">Find Your Holiday</div>
      <div className="nav-item">Popular Locations</div>
      <div className="nav-item">Log In</div>
      <div className="nav-item">
        <Button buttonText="Create An Account" route="/" />
      </div>
    </nav>
  );
};

export default Navbar;
