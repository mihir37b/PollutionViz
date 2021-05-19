import React, { Component } from "react";
import "./UserInput.css";
import axios from "axios";
import { API_KEY_DATA, API_KEY_COORDS } from "../secrets";

import { Link } from "@material-ui/core";
import AqiInfo from "./AqiInfo";
import Form from "./Form";

import Graph from "./Graph";

export default class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      stats: [263.69, 0.26, 13.88, 50.78, 0.25, 8.31, 8.97, 0.71],
      chartData: {},
      location: "Poughkeepsie, NY",
      aqi: 0,
      show: false,
    };
  }

  getCoords = async (city = "miami") => {
    console.log(city);
    const latNlong = await axios(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${API_KEY_COORDS}`
    );
    if (latNlong.data.status !== "OK") {
      this.setState({ location: "invalid" });
      this.getData({ lat: 0, lng: 0 });
    } else {
      let coords = latNlong.data.results[0].geometry.location;
      let location = latNlong.data.results[0].formatted_address;
      this.setState({ location });
      this.getData(coords);
    }
  };

  getData = async (coords) => {
    const api_call = await axios(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${coords.lat}&lon=${coords.lng}&appid=${API_KEY_DATA}`
    );

    let obj = api_call.data.list[0].components;
    let stats = [];
    for (let gas in obj) {
      stats.push(obj[gas]);
    }
    this.setState({
      stats: stats,
      aqi: api_call.data.list[0].main.aqi,
    });
    //   this.getChartData();
  };

  showMore() {
    this.setState({ show: !this.state.show });
  }

  render() {
    //const textField = new MDCTextField(
    document.querySelector(".mdc-text-field");

    return (
      <div>
        <div>
          <h1 className="title">How's My Air?</h1>
          <Link href="#" className="about">
            About
          </Link>
          |
          <Link href="#" className="feedback">
            Feedback
          </Link>
        </div>
        <div></div>
        <div className="main">
          <Form getCoords={this.getCoords} />
          {this.state.location === "invalid" ? (
            <h1>{"Please Enter Valid Location"}</h1>
          ) : (
            <div className="render">
              <h2>
                {this.state.location
                  ? `Air Quality In ${this.state.location}`
                  : ""}
              </h2>
              <Graph stats={this.state.stats} />
              <h4>
                {this.state.aqi ? `Air Quality Index: ${this.state.aqi}` : ""}
              </h4>
              <h6>
                {this.state.aqi ? (
                  <Link href="#" onClick={() => this.showMore()}>
                    What's this?
                  </Link>
                ) : (
                  ""
                )}
              </h6>
              {this.state.show ? <AqiInfo /> : ""}
            </div>
          )}
        </div>
      </div>
    );
  }
}
