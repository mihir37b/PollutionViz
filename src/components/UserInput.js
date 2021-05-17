import React, { Component } from "react";
import "./UserInput.css";
import axios from "axios";
import { API_KEY_DATA, API_KEY_COORDS } from "../secrets";
import { Bar } from "react-chartjs-2";
import { TextField } from "@material-ui/core";

export default class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      stats: {},
      chartData: {},
      location: "",
      aqi: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.myRef = React.createRef();
  }

  getCoords = async (city) => {
    const latNlong = await axios(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${API_KEY_COORDS}`
    );

    let coords = latNlong.data.results[0].geometry.location;
    let location = latNlong.data.results[0].formatted_address;
    this.setState({ location });

    this.getData(coords);
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
    this.getChartData();
  };

  getChartData() {
    console.log(this.state.stats);
    this.setState({
      chartData: {
        labels: ["CO", "NH3", "NO", "NO2", "O3", "PM2_5", "PM10", "SO2"],
        datasets: [
          {
            label: ["μg/m3"],
            data: this.state.stats,
            backgroundColor: [
              "green",
              "blue",
              "red",
              "black",
              "orange",
              "yellow",
              "purple",
              "pink",
            ],
          },
        ],
      },
    });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getCoords(event.target.city.value);
  }

  render() {
    //const textField = new MDCTextField(
    document.querySelector(".mdc-text-field");

    return (
      <div>
        <h1>How's My Air?</h1>
        <div className="main">
          <form onSubmit={this.handleSubmit}>
            <div className="city-search">
              <label>
                <TextField
                  color="white"
                  type="text"
                  name="city"
                  placeholder="Search By City"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <TextField type="submit" value="Submit" />
            </div>
          </form>

          <h1>
            {this.state.location ? `Air Quality In ${this.state.location}` : ""}
          </h1>
          <Bar
            className={"bing"}
            data={this.state.chartData}
            options={{
              legend: {
                display: true,
                position: true,
              },
            }}
          />
          <h3>
            {this.state.aqi ? `Air Quality Index: ${this.state.aqi}` : ""}
          </h3>
        </div>
      </div>
    );
  }
}
