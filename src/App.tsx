import React, { useEffect } from "react";
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
    <>
      <Navbar />
      <section className="intro">
        <h2>Ready to find your next dream holiday?</h2>
        <Button buttonText="Get Started" route="/" />
      </section>
      <HolidaySearch />
    </>
  );
}

export default App;
