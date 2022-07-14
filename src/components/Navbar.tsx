import React from "react";
import Button from "./Button";
import "./styles.css";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="nav-item">Holiday Finder</div>
      <div className="nav-item">Find Your Holiday</div>
      <div className="nav-item">Popular Locations</div>
      <div className="nav-item">Log In</div>
      <div className="nav-item">
        <Button buttonText="Create An Account" route="/" />
      </div>
    </div>
  );
};

export default Navbar;
