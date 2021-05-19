import React, { Component } from "react";
import "./UserInput.css";
import axios from "axios";
import { API_KEY_DATA, API_KEY_COORDS } from "../secrets";
import { Bar, defaults } from "react-chartjs-2";
import { Link, TextField } from "@material-ui/core";
import AqiInfo from "./AqiInfo";

export default class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      stats: {},
      chartData: {},
      location: "",
      aqi: 0,
      show: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.myRef = React.createRef();
    defaults.animation = false;
  }

  getCoords = async (city) => {
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
    this.getChartData();
  };

  getChartData() {
    this.setState({
      chartData: {
        labels: ["CO", "NH₃", "NO", "NO₂", "O₃", "PM₂.₅", "PM₁₀", "SO₂"],

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

  showMore() {
    this.setState({ show: !this.state.show });
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
        <h1 className="title">How's My Air?</h1>
        <div></div>
        <div className="main">
          <form onSubmit={this.handleSubmit}>
            <div className="city-search">
              <label>
                <TextField
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

          {this.state.location === "invalid" ? (
            <h1>{"Please Enter Valid Location"}</h1>
          ) : (
            <div className="render">
              <h2>
                {this.state.location
                  ? `Air Quality In ${this.state.location}`
                  : ""}
              </h2>
              <Bar
                data={this.state.chartData}
                options={{
                  legend: {
                    display: true,
                    position: true,
                    responsive: false,
                    fontColor: "white",
                  },
                }}
              />
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
              {this.state.show ? <AqiInfo></AqiInfo> : ""}
            </div>
          )}
        </div>
      </div>
    );
  }
}
