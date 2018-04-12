import React, { Component } from "react";
import logo from "./logo.svg";
import "./EqualHeightElements.css";

let styles = {
  container: { display: "flex", borderStyle: "solid" }
};

class EqualHeightElements extends Component {
  render() {
    return (
      <div class="elements">
        <div class="item">You can tell the world you never was my girl</div>
        <div class="item">You can burn my clothes when I'm gone</div>
        <div class="item large">
          Or you can tell your friends just what a fool I've been
        </div>
        <div class="item">And </div>

        <div class="item">You </div>
        <div class="item small">You </div>
        <div class="item">Or you can tell my lips to tell my fingertips</div>
        <div class="item small">They won't be reaching out for you no more</div>

        <div class="item large">
          But don't tell my heart my achy breaky heart
        </div>
        <div class="item">I just don't think he'd understand</div>
        <div class="item small">And if you tell my heart</div>
        <div class="item large">my achy breaky heart</div>
        <div class="item">He might blow up and kill this man</div>

        <div class="item">[guitar]</div>

        <div class="item">You can tell your ma I moved to Arkansas</div>
        <div class="item large">You can tell your dog to bite my leg</div>
        <div class="item">
          Or tell your brother Cliff whose fist can can tell my lip
        </div>
        <div class="item small">He never really liked me anyway</div>

        <div class="item">
          Or tell your Aunt Louise tell anything you please
        </div>
        <div class="item">Myself already knows I'm not okay</div>
        <div class="item large">
          Or you can tell my eyes to watch out for my mind
        </div>
        <div class="item">It might be walking out on me today</div>

        <div class="item">Don't tell my heart my achy breaky heart...</div>

        <div class="item">[guitar]</div>

        <div class="item">Don't tell my heart my achy breaky heart...</div>
        <div class="item">Don't tell my heart my achy breaky heart...</div>
      </div>
    );
  }
}

export default EqualHeightElements;
