import React, { useState } from "react";
import Button from "./CSS/Button.js";

function GroupProject(props) {
  const [skills, setSkills] = useState(true);
  const showingSkills = () => {
    setSkills(false);
  };
  const hidingSkills = () => {
    setSkills(true);
  };

  return (
    <div className="banner">
      <iframe
        className="iframe-background"
        src={props.project.iframeUrl}
        allow="autoplay"
        allowFullScreen
      ></iframe>
      <div className="textBox">
        <h2>{props.project.projectName}</h2>
        <p>{props.project.content}</p>
        <div className="skill-box">
          {skills && <Button onClick={showingSkills}>Skills</Button>}
          {!skills && <Button onClick={hidingSkills}>Hide</Button>}
          {!skills && (
            <ul style={{ color: "white", paddingLeft: "20px" }}>
              <li>HTML/CSS</li>
              <li>React/Redux</li>
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
          src={props.project.iframeUrl}
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
  );
}

export default GroupProject;
