import React from "react";
import styled from "styled-components";
import Name from "./Name.js";

const Wrapper = styled.div`
  margin: 110px 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .box {
    background: #f0d879;
    margin: 10px;
    padding: 10px;
    border: 2px solid #292929;
    border-radius: 10px;
    box-shadow: 5px 5px #bcbbb3;
  }
  h4 {
    margin: 10px;
  }
  img {
    height: 100px;
    margin: 10px;
  }

  .university {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
  }
  .year {
    margin-top: 0;
  }
  @media (max-width: 991px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
function Education() {
  return (
    <Wrapper>
      <div className="box">
        <h4 className="year">2019.09~2020.04</h4>
        <div className="university">
          <a href="https://www.concordia.ca/">
            <img src="concordia.jpg"></img>
          </a>
          <h3>Concordia University</h3>
          <h4>Coding bootcamp</h4>
        </div>
      </div>
      <div className="box">
        <h4 className="year">2017.01~2019.08</h4>
        <div className="university">
          <a href="http://eng.cuk.edu/index.do">
            <img src="korea.jpg"></img>
          </a>
          <h3>Korea Cyber University</h3>
          <h4>Bachelor of Software Engineering</h4>
        </div>
      </div>
      <div className="box">
        <h4 className="year">2015.08~2016.10</h4>
        <div className="university">
          <a href="https://avirontech.com/">
            <img src="aviron.jpg"></img>
          </a>
          <h3>Aviron Technical Institute</h3>
          <h4>DEP in industrial Drafting</h4>
        </div>
      </div>
      <div className="box">
        <h4 className="year">1995.03~2002.02</h4>
        <div className="university">
          <a href="http://www.jbnu.ac.kr/eng/">
            <img src="CBNU(KOR).JPG"></img>
          </a>
          <h3>Chonbuk National University</h3>
          <h4>Bachelor of Chemical Engineering</h4>
        </div>
      </div>
      <Name />
    </Wrapper>
  );
}

export default Education;
