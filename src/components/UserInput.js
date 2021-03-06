import React, { Component, useState } from "react";
import "./UserInput.css";
import axios from "axios";
// import { REACT_APP_API_KEY_DATA, REACT_APP_API_KEY_COORDS } from "/../env";
import { Link } from "@material-ui/core";
import Form from "./Form";
import Modal from "./Modal";
import Graph from "./Graph";
import Chemicals from "./Chemicals";
import { Slide } from "react-reveal";
import dotenv from "dotenv";
const { REACT_APP_API_KEY_DATA, REACT_APP_API_KEY_COORDS } = process.env;

export default class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      stats: [],
      chartData: {},
      location: "",
      aqi: 0,
      show: false,
    };
    console.log(process.env);
  }
  getCoords = async (city) => {
    const latNlong = await axios(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${REACT_APP_API_KEY_COORDS}`
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
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${coords.lat}&lon=${coords.lng}&appid=${REACT_APP_API_KEY_DATA}`
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
  };

  openModal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    document.querySelector(".mdc-text-field");

    return (
      <div className={`overlay-${this.state.show}`}>
        <div>
          <h1 className="title">How's My Air?</h1>
          <Link href="/about" className="learn-more">
            About
          </Link>
        </div>
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
              {this.state.stats.length > 0 ? (
                <Slide left>
                  <Graph stats={this.state.stats} />
                </Slide>
              ) : (
                ""
              )}

              <h4 className="aqi">
                {this.state.aqi ? `Air Quality Index: ${this.state.aqi}` : ""}
              </h4>
              <h6>
                {this.state.aqi ? (
                  <Link href="#" onClick={() => this.openModal()}>
                    What's Air Quality Index?
                  </Link>
                ) : (
                  ""
                )}
              </h6>

              {this.state.show ? (
                <Modal openModal={() => this.openModal()} />
              ) : (
                ""
              )}
            </div>
          )}
        </div>

        <div className="chemicals">
          <Chemicals stats={this.state.stats} />
        </div>
      </div>
    );
  }
}
