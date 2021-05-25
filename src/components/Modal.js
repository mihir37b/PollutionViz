import React from "react";
import "./Modal.css";
import { Link } from "@material-ui/core";

export default function Modal(props) {
  console.log(props);
  return (
    <div className="modal-container">
      <h4 className="heading">Air Quality Index</h4>
      <p className="text">
        The Air Quality Index (AQI) quantifies the level of air pollution from
        the pollutants listed on the graph. An AQI score of 1 would be the
        lowest and therefore safest air quality while 5 would be the least safe.
      </p>
      <Link
        href="https://en.wikipedia.org/wiki/Air_quality_index"
        className="options"
      >
        Learn More
      </Link>

      <Link href="#" className="options" onClick={() => props.openModal()}>
        Close
      </Link>
    </div>
  );
}
