import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

let styles = {
  container: { display: "flex", borderStyle: "solid" }
};

class App extends Component {
  render() {
    return (
      <div class="wrapper">
        <div class="slider">
          <img src={require("./slide.jpeg")} />
        </div>

        <nav class="slider-nav">
          <ul>
            <li class="arrow">
              <a href="#">
                <span>←</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span>Add a CLI to Node Apps with Vantage</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span>NewSprint, Spectacle</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span>Small Modules: Tales from a Serial Module Author</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span>The End</span>
              </a>
            </li>

            <li class="arrow">
              <a href="#">
                <span>→</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
