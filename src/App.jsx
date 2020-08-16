import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import GroupProject from "./GroupProject.jsx";
import SocialApp from "./SocialApp.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

import NavBar from "./NavBar.jsx";

function App() {
  const data = [
    {
      projectName: "Group Project",
      content:
        "Full stack web application for motorcycle marketplace. Buyers can pay options by number of months and rate. User can add their own items for sale and search bar and shopping cart are fully functional",
      iframeUrl: "https://www.youtube.com/embed/gAIXxkBLx7A?autoplay=1&mute=1",
    },
    {
      projectName: "Social App",
      content:
        "This application contains variable features such as dynamic background theme, social app login and Google Map to find the similar rank of player nearby. It also allows users to add tennis courts and themselves as a player",
      iframeUrl: "https://www.youtube.com/embed/XW2oU8SB5gM?autoplay=1&mute=1",
    },
  ];

  const renderGroupProject = () => {
    return <GroupProject project={data[0]} />;
  };
  const renderSocialApp = () => {
    return <SocialApp project={data[1]} />;
  };
  const renderEducation = () => {
    return <Education />;
  };
  const renderExperience = () => {
    return <Experience />;
  };
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact={true} path="/" render={renderGroupProject} />
      <Route exact={true} path="/socialApp" render={renderSocialApp} />
      <Route exact={true} path="/education" render={renderEducation} />
      <Route exact={true} path="/experience" render={renderExperience} />
    </BrowserRouter>
  );
}

export default App;
