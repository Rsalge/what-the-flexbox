import React, { Component } from "react";
import logo from "./logo.svg";
import "./PricingGrid.css";

let styles = {
  container: { display: "flex", borderStyle: "solid" }
};

class PricingGrid extends Component {
  render() {
    return (
      <div class="pricing-grid">
        <div class="plan plan1">
          <h2>Cat</h2>
          <p>Common, yet regarded by many as the worst house pet.</p>
          <ul class="features">
            <li>Scratches everything</li>
            <li>Easily lost for days</li>
            <li>Kind of a bummer</li>
          </ul>

          <p class="price">free</p>

          <a href="#" class="cta">
            😾 Really?
          </a>
        </div>

        <div class="plan plan2">
          <h2>Dog</h2>
          <p>
            Loving, gentle and caring. Dogs are the best house pet to have and
            will increase happiness ten fold.{" "}
          </p>
          <ul class="features">
            <li>Super Fun</li>
            <li>Friends love them</li>
            <li>Plays games</li>
            <li>Not a cat</li>
          </ul>

          <p class="price">$90</p>

          <a href="#" class="cta">
            🐶 Best Deal →
          </a>
        </div>

        <div class="plan plan3">
          <h2>Fish</h2>
          <p>Cheap n' easy.</p>
          <ul class="features">
            <li>Eats flakes</li>
            <li>Cop out</li>
            <li>Replaceable</li>
          </ul>

          <p class="price">$3</p>

          <a href="#" class="cta">
            🐠
          </a>
        </div>
      </div>
    );
  }
}

export default PricingGrid;
