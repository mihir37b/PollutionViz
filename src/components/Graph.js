import React, { Component } from "react";
import { Bar, defaults } from "react-chartjs-2";

export default class Graph extends Component {
  render() {
    console.log(this.props);
    defaults.animation = false;
    return (
      <div>
        <Bar
          data={this.props.data}
          options={{
            legend: {
              display: true,
              position: true,
              responsive: false,
              fontColor: "white",
            },
          }}
        />
      </div>
    );
  }
}
