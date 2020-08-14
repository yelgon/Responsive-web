import React, { useState } from "react";
import Header from "./CSS/Header.js";
import Button from "./CSS/Button.js";

function App() {
  const [skills, setSkills] = useState(true);
  const showingSkills = () => {
    setSkills(false);
  };
  const hidingSkills = () => {
    setSkills(true);
  };
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
        <iframe
          className="iframe-background"
          src="https://www.youtube.com/embed/gAIXxkBLx7A?autoplay=1&mute=1"
          allow="autoplay"
          allowFullScreen
        ></iframe>
        <div className="textBox">
          <h2>Group Project</h2>
          <p>
            c typesetting, remaining essentially unchanged. It was popularised
            in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum
            is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="skill-box">
            {skills && <Button onClick={showingSkills}>Skills</Button>}
            {!skills && <Button onClick={hidingSkills}>Hide</Button>}
            {!skills && (
              <ul style={{ color: "white", paddingLeft: "20px" }}>
                <li>React</li>
                <li>Redux</li>
                <li>Cookies</li>
                <li>Node.JS</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            )}
          </div>
        </div>
        <div className="videoBox">
          <iframe
            src="https://www.youtube.com/embed/gAIXxkBLx7A?autoplay=1&mute=1"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>
        <ul className="sci">
          <li>
            <a href="https://www.facebook.com/gon.kim.355">
              <img src="facebook.png" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yangoh-kim-92ba53153/">
              <img src="linkedIn.png" />
            </a>
          </li>
          <li>
            <a href="https://github.com/yelgon">
              <img src="gitHub.png" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
