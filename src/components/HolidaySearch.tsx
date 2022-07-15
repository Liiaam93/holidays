import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const HolidaySearch: React.FC = () => {
  const handleSubmit = () => {
    return;
  };

  return (
    <div className="search-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="location">Location</label>
          <div className="flex-row">
            <FontAwesomeIcon icon={solid("location-arrow")} className="icons" />
            <input
              type="text"
              id="location"
              name="location"
              placeholder="
          San Marino"
            ></input>
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="nights">Nights</label>
          <div className="flex-row">
            <FontAwesomeIcon icon={solid("bed")} className="icons" />

            <input
              type="number"
              id="nights"
              name="nights"
              placeholder="
          7"
            ></input>
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="people">People</label>
          <div className="flex-row">
            <FontAwesomeIcon icon={solid("person")} className="icons" />
            <input
              type="number"
              id="people"
              name="people"
              placeholder="2"
            ></input>
          </div>
        </div>
        <div className="button-container">
          <button type="submit">
            <FontAwesomeIcon icon={solid("search")} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default HolidaySearch;
