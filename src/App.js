import "./App.css";
import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import About from "./components/About";
import UserInput from "./components/UserInput";
import Sources from "./components/Sources";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={UserInput} />
          <Route exact path="/about" component={About} />
          <Route exact path="/sources" component={Sources} />
        </Switch>
      </Router>
    );
  }
}
