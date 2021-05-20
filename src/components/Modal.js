import React from "react";
import "./Modal.css";

export default function Modal() {
  return (
    <div className="modal-container">
      <h4 className="heading">Air Quality Index</h4>
      <p className="text">
        Think of the AQI as a yardstick that runs from 0 to 500. The higher the
        AQI value, the greater the level of air pollution and the greater the
        health concern. For example, an AQI value of 50 or below represents good
        air quality, while an AQI value over 300 represents hazardous air
        quality.
      </p>
    </div>
  );
}
