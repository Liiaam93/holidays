import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import HolidaySearch from "./components/HolidaySearch";
const WebFont = require("webfontloader");

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Be Vietnam Pro"],
      },
    });
  }, []);

  return (
    <div className="heading">
      <Navbar />
      <div className="intro">
        <p>Ready to find your next dream holiday?</p>
        <Button buttonText="Get Started" route="/" />
      </div>
      <HolidaySearch />
    </div>
  );
}

export default App;
