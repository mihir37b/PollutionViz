import React, { Component } from "react";
import { Bar, defaults } from "react-chartjs-2";

export default class Graph extends Component {
  render() {
    console.log(this.props.stats);

    let chartData = {
      labels: ["CO", "NH₃", "NO", "NO₂", "O₃", "PM₂.₅", "PM₁₀", "SO₂"],

      datasets: [
        {
          label: ["μg/m3"],
          data: this.props.stats,

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
    };
    defaults.animation = false;
    return (
      <div>
        <Bar
          data={chartData}
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
