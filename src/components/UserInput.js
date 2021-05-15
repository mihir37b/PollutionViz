import React, { Component } from "react";
import axios from "axios";
import { API_KEY_DATA, API_KEY_COORDS } from "../secrets";
import Stats from "./Stats";

export default class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      stats: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getCoords = async (city) => {
    const latNlong = await axios(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${API_KEY_COORDS}`
    );

    let coords = latNlong.data.results[0].geometry.location;
    this.getData(coords);
  };

  getData = async (coords) => {
    const api_call = await axios(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${coords.lat}&lon=${coords.lng}&appid=${API_KEY_DATA}`
    );

    let obj = api_call.data.list[0].components;

    this.setState({
      stats: obj,
    });
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getCoords(event.target.city.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Stats stats={this.state.stats} />
      </div>
    );
  }
}
