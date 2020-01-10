import React from "react";
import styled from "styled-components";
import Funders from "./Funders";
const Thanks = () => {
  const StyledH2 = styled.h2`
    font-size: 2.5em;
    padding: 0;
    margin: 0;
  `;
  const StyledDiv = styled.div`
    position: relative;
    top: 400px;
    text-align: left;
    @media (max-width: 1200px) {
      top: 350px;
    }
    @media (max-width: 800px) {
      top: 250px;
    }
    @media (max-width: 750px) {
      top: 0;
      font-size: 0.8em;
      width: 95%;
      margin: auto;
    }
  `;
  return (
    <StyledDiv>
      <StyledH2 className="cookiefont">Note of thanks for our funders</StyledH2>
      <Funders />
    </StyledDiv>
  );
};
export default Thanks;
