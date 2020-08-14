import styled from "styled-components";

const Header = styled.header`
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
    letter-spacing: 2px;
    text-decoration: none;
  }
  .toggle {
    max-width: 60px;
    cursor: pointer;

    img {
      max-width: 100%;
    }
  }
`;
export default Header;
