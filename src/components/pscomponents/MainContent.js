import React from "react";
import styled from "styled-components";
import Intro from "./Intro";
import PandS from "./PandS";
import TiledDiv from "../TiledDiv";
const MainContent = () => {
  const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 40% 1fr;
    grid-gap: 20px;
    width: 80%;
    margin: auto;
    @media (max-width: 1024px) {
      width: 95%;
    }
    @media (max-width: 750px) {
      grid-template-columns: auto;
    }
  `;
  return (
    <TiledDiv>
      <StyledDiv>
        <Intro />
        <PandS />
      </StyledDiv>
    </TiledDiv>
  );
};
export default MainContent;
