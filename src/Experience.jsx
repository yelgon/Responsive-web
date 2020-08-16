import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 100px 50px;
  img {
    height: 100px;
  }

  .work {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    justify-items: center;
    border: 2px solid black;
    border-radius: 1em;
    margin: 20px;

    height: 250px;
    background: #d4edf4;
    box-shadow: 5px 5px #e28f8f;
    li {
      padding: 5px;
    }
  }
  @media (max-width: 991px) {
    .work {
      grid-template-columns: 1fr;
      padding: 10px;

      li {
        padding: 10px;
      }
    }
  }
`;
function Experience() {
  return (
    <Wrapper>
      <div className="work">
        <h2>Industrial Draftman</h2>
        <h4>2016.12-2020.04</h4>
        <h3>Mr.Roller ( Montreal )</h3>
        <div>
          <ul>
            <li>Mechanical design</li>
            <li>AutoCAD and 3D software(ProE)</li>
          </ul>
        </div>
      </div>
      <div className="work">
        <h2>Math Teacher</h2>
        <h4>2011.01-2015.01</h4>
        <h3>Gubei Academy ( Shanghai, China )</h3>
        <div>
          <ul>
            <li>Teaching Math ( Calculus 1,2 )</li>
            <li>Counselling students</li>
          </ul>
        </div>
      </div>
      <div className="work">
        <h2>Math Teacher </h2>
        <h4>2006.02-2012.03</h4>
        <h3>RootM ( Seoul, S.Korea )</h3>
        <div>
          <ul>
            <li>Teaching Math ( Calculus 1,2)</li>
            <li>Training new teachers </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}
export default Experience;
