import "./App.css";
import React, { Component } from "react";
import UserInput from "./components/UserInput";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <UserInput />;
  }
}
