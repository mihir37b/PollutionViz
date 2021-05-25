import React from "react";
import { Link } from "@material-ui/core";
import "./About.css";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <h4>
        -How's My Air was created by{" "}
        <Link href="https://www.linkedin.com/in/mihir-bommakanti/">
          Mihir Bommakanti
        </Link>{" "}
        as a side project to explain air pollution in a form that is easier to
        understand. -How's My Air was made using the{" "}
        <Link href="https://openweathermap.org/">Open Weather API</Link> and the{" "}
        <Link href="https://developers.google.com/maps/documentation/geolocation/overview">
          Google Geolocation API
        </Link>{" "}
        to obtain the data. The front end was handled with React and the design
        was handled with MaterialUI-React
      </h4>
      <Link href="/">Back Home</Link>
    </div>
  );
}
