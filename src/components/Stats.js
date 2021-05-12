import React, { Component } from "react";

export default class Stats extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.stats}</h1>
      </div>
    );
  }
}
