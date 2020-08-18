import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 100px;
  z-index: 1000;

  .logo {
    position: relative;
    font-size: 2em;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    text-decoration: none;
  }
  .toggle {
    max-width: 60px;
    cursor: pointer;
    img {
      max-width: 100%;
    }
  }
  @media (max-width: 991px) {
    padding: 20px 50px;
  }
`;
const MenuBox = styled.div`
  position: absolute;
  color: #f96115;
  background: #242726;
  font-size: 20px;
  right: 100px;
  top: 80px;
  Link {
    text-decoration: none;
  }

  div {
    padding: 10px;
  }
  @media (max-width: 991px) {
    font-size: 18px;
    right: 50px;
    top: 75px;
    div {
      padding: 5px;
    }
  }
`;

function NavBar() {
  const [menu, setMenu] = useState(false);
  const showingMenu = () => {
    if (menu) {
      return setMenu(false);
    }
    return setMenu(true);
  };

  return (
    <Header>
      <div className="logo">Full-stack Developer</div>

      <div onClick={showingMenu} className="toggle">
        <img src="toggle.png" />
      </div>
      {menu && (
        <MenuBox>
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            <div>Group Project</div>
          </Link>
          <Link
            to="/socialApp"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div>Social Website</div>
          </Link>
          <Link
            to="/education"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div>Education</div>
          </Link>
          <Link
            to="/experience"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div>Experience</div>
          </Link>
        </MenuBox>
      )}

      {/* <Link to="/education">TEST</Link> */}
    </Header>
  );
}
export default NavBar;
