import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const HolidaySearch: React.FC = (props) => {
  return (
    <div className="search-container">
      <div className="form-container">
        <div className="form-item">
          <p>Location</p>
          <div className="flex-row">
            <FontAwesomeIcon icon={solid("location-arrow")} className="icons" />
            <input
              placeholder="
          San Marino"
            ></input>
          </div>
        </div>
        <div className="form-item">
          <p>Nights</p>
          <div className="flex-row">
            <FontAwesomeIcon icon={solid("bed")} className="icons" />

            <input
              placeholder="
          7"
            ></input>
          </div>
        </div>
        <div className="form-item">
          <p>People</p>
          <div className="flex-row">
            <FontAwesomeIcon icon={solid("person")} className="icons" />
            <input placeholder="2"></input>
          </div>
        </div>
        <div className="button-container">
          <button>
            <FontAwesomeIcon icon={solid("search")} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HolidaySearch;
