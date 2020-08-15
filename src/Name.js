import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  font-size: 1em;
  color: #fff;
  bottom: 0;
  right: 0;
  padding: 20px;
  text-align: end;
  font-weight: 700;
  letter-spacing: 1px;
  div {
    padding: 5px;
  }
  @media (max-height: 745px) {
    opacity: 0;
  }
`;

function Name() {
  return (
    <Wrapper>
      <div>Yangoh Kim</div>
      <div>yelgon36@gmail.com</div>
    </Wrapper>
  );
}

export default Name;
