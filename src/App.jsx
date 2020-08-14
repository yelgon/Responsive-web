import React, { Component } from "react";
import Header from "./CSS/Header.js";

class App extends Component {
  render = () => {
    return (
      <div>
        <Header>
          <a href="#" className="logo">
            Yangoh Kim
          </a>
          <div className="toggle">
            <img src="toggle.png" />
          </div>
        </Header>
        <div className="banner">
          <video src="thailand.mp4" muted autoPlay loop type="mp4" />
          <div className="textBox">
            <h2>Wonderfull Thailand</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <a href="#">Read More</a>
          </div>
          <div className="videoBox"></div>
          <ul className="sci">
            <li>
              <a href="#">
                <img src="facebook.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="twitter.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="instagram.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
}

export default App;
