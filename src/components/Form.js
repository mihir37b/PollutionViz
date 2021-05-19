import React, { Component } from "react";
import { Link, TextField } from "@material-ui/core";
import getCoords from "./UserInput";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      location: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    console.log("YES");
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("submit");
    this.props.getCoords(event.target.city.value);
  }
  render() {
    return (
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
    );
  }
}
