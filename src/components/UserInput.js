import React, { Component } from "react";
import axios from "axios";
import { API_KEY_DATA, API_KEY_COORDS } from "../secrets";

export default class UserInput extends Component {
  getData = async (city) => {
    const api_call =
      await axios(`http://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid=${API_KEY_DATA}
    `);

    const latNlong = await axios(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${API_KEY_COORDS}`
    );

    console.log(latNlong);
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getData();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Lat:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Long:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
